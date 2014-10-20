var app = app || {};
/* alias away the sync method */
Backbone._sync = Backbone.sync;

/* define a new sync method */
Backbone.sync = function(method, model, success, error) {
    /* only need a token for non-get requests */
    if (method == 'create' || method == 'update' || method == 'delete') {
        /* grab the token from the meta tag rails embeds */
        var auth_options = {};
        auth_options[$("meta[name='csrf-param']").attr('content')] =
            $("meta[name='csrf-token']").attr('content');
        /* set it as a model attribute without triggering events */
        model.set(auth_options, {
            silent: true
        });
    }
    /* proxy the call to the old sync method */
    return Backbone._sync(method, model, success, error);
}

jQuery.fn.extend({
    live: function(types, data, fn) {
        //workaround to suppress redmine's jquery ruins
        return this;
    },
})


$(function() {
    $('#header').hide();
    // $('#top-menu').hide();
    //app.employers - collection of userprofiles
    //app.router - backbone router
    //app.employer

    rivets.adapters[':'] = {
        // set the listeners to update the corresponding DOM element
        subscribe: function(obj, keypath, callback) {
            if (obj instanceof Backbone.Collection) {
                obj.on('add remove reset', callback);
            }
            obj.on('change:' + keypath, callback);
        },
        // this will be triggered to unbind the Rivets.js events
        unsubscribe: function(obj, keypath, callback) {
            if (obj instanceof Backbone.Collection) {
                obj.off('add remove reset', callback);
            }
            obj.off('change:' + keypath, callback);
        },
        // define how Rivets.js should read the propery from our objects
        read: function(obj, keypath) {
            // if we use a collection we will loop through its models otherwise we just get the model properties
            return obj instanceof Backbone.Collection ? obj.models : obj.get(keypath);
        },
        // It gets triggered whenever we want update a model using Rivets.js
        publish: function(obj, keypath, value) {
            obj.set(keypath, value);
        }
    };

    // rivets.formatters.date = function(value) {
    //     return moment(value).format('MMMM, YYYY');
    // }

    Backbone.View.prototype.close = function() {
        this.remove();
        this.unbind();
        if (this.onClose) {
            this.onClose();
        }
    };

    Backbone.View.prototype.renderFinished = function() {
        if (this.onRenderFinished) {
            this.onRenderFinished();
        }
    };

    app.showView = function(view) {
        if (app.currentView) {
            app.topMenuView.deactivate(view.name);
            app.currentView.close();
        }
        app.currentView = view;
        app.currentView.render();
        $(".content").html(app.currentView.el);
        app.currentView.renderFinished();
        app.topMenuView.activate(view.name);
    };

    app.getDateOfBirth = function(date) {
        var list = date.split('.').filter(Boolean);
        if (list.length > 1) { //todo: refactor            
            var dd = _.first(list);
            var mm = _.last(list);
            var year = (new Date).getFullYear();
            return dd + '/' + mm;
        } else {
            return date;
        }
    }

    app.logMeIn = function() {
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }
        window.location = window.location.origin + '/login?back_url=' + window.location.origin + '/tercomin';
    };

    app.getHash = function() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    var EmployerCollection = Backbone.Collection.extend({
        url: '/tercomin/api/v1/user_profile'
    });

    app.Position = Backbone.Model.extend({});

    app.PositionCollection = Backbone.Collection.extend({
        model: app.Position
    });

    app.PositionView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#position-li-template').html()),
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            rivets.bind(this.el, {
                position: this.model
            });            
            return this;
        }
    });

    app.AddOrUpdatePositionView = Backbone.View.extend({
        className: 'position-container',
        template: _.template($('#position-template').html()),
        events: {
            'click .add-position-cancel': 'cancel',
            'click .add-position-submit': 'submit',
            'mouseover .pos-date': 'createDatePicker',            
        },
        createDatePicker: function(e) {            
            $(e.currentTarget).datetimepicker({
                pickTime:false
            });        
        },
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            rivets.bind(this.el, {
                position: this.model
            });
            return this;
        },
        cancel: function(e) {
            // Backbone.positionEvent.trigger('cancelPositionForm', this.model);
            this.remove();
        },
        submit: function(e) {            
            Backbone.positionEvent.trigger('positionSubmit', this.model);
        }
    });

    app.PositionsView = Backbone.View.extend({
        tagName: 'ul',
        className: 'positions-view',
        initialize: function() {},
        render: function() {            
            this.collection.each(function(position) {
                var positionView = new app.PositionView({
                    model: position
                });
                this.$el.append(positionView.render().el);
            }, this);            
            return this;
        }
    });

    app.Employer = Backbone.Model.extend({
        urlRoot: '/tercomin/api/v1/user_profile/',
        validate: function(attrs, options) {

            if (attrs.profile.room_number) {
                if (attrs.profile.room_number.length > 6) {
                    return "Room number should be less than 6 symbols";
                }
                var re = /^[0-9\-]+$/;
                if (!re.test(attrs.profile.room_number)) {
                    return "Room number is invalid /^[0-9\-]+$/";
                }
            }
        }
    });

    app.Employer.prototype.parse = function(response) {
        var attr = response && _.clone(response) || {};
        if (response && response.profile.positions) {
            var positions = $.parseJSON(response.profile.positions);
            var tmp = new app.PositionCollection();
            tmp.reset(positions);
            console.log(tmp);
            attr['positions'] = tmp;
        }else{
            // attr['positions'] = new app.PositionCollection();
        }

        if (response && response.profile.data) {
            var data = $.parseJSON(response.profile.data);
            var dataModel = new Backbone.Model(data);
            dataModel.set('editable', response.editable);
            dataModel.set('id', "tercomin/" + response.profile.id);
            dataModel.set('firstname', response.profile.firstname);
            dataModel.set('lastname', response.profile.lastname);
            dataModel.set('mail', response.profile.mail);
            dataModel.set('avatar_url', response.profile.avatar_url);
            attr['data'] = dataModel;
        }
        console.log(attr);
        return attr;
    };

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };

    // Backbone.Model.prototype.toJSON = function() {
    //   // var json = _.clone(this.attributes);
    //   // for(var attr in json) {
    //   //   if (endsWith(attr, "_gen"))                
    //   //       delete json[attr];        
    //   // }            
    //   return json;
    // };

    app.employers = new EmployerCollection;

    app.topMenuView = new TopMenuView();
    app.topMenuView.render(); //bind search event 

    var appRouter = Backbone.Router.extend({
        routes: {
            'employers': 'employers',
            'mypage': 'mypage',
            'mypage/(:param)': 'mypage',
            'employers/(:param)': 'employers',
            'events': 'events',
            'events/(:param)': 'events',
            'settings': 'settings',
            'settings/(:param)': 'settings',
            '*actions': 'mypage'
        },

        mypage: function(param) {
            var req = {};
            if (param !== null) {
                req.id = param;
            } else {
                req.id = "logged";
            };
            app.employer = new app.Employer(req);
            app.employer.fetch({
                error: function(m, r) {
                    if (r.status === 422) { //not logged
                        app.logMeIn();
                    }
                },
                success: function(m, r) {
                    var profileView = new ProfileView({
                        model: app.employer
                    });
                    app.showView(profileView);
                }
            })
        },

        employers: function(param) {
            app.employers.reset();
            app.topMenuView.setSearch(param);
            var empView = new EmployersView({
                collection: app.employers
            });
            app.showView(empView);

            var dataReq = {};
            if (param !== null) {
                dataReq.criteria = param.split(' ');
            }

            app.employers.fetch({
                data: dataReq,
                error: function(m, r) {
                    console.log(r.responseText);
                },
                success: function() {
                    app.currentView.initScroll(dataReq);
                }
            });
        },

        events: function(param) {
            var eventsView = new EventsView({

            });
            app.showView(eventsView);
        },

        settings: function(param) {
            //todo: dup
            var req = {};
            if (param !== null) {
                req.id = param;
            } else {
                req.id = "logged";
            };
            app.employer = new app.Employer(req);
            app.employer.fetch({
                error: function(m, r) {
                    if (r.status === 422) { //not logged
                        app.logMeIn();
                    }
                },
                success: function(m, r) {
                    var settingsView = new SettingsView({
                        model: app.employer
                    });
                    app.showView(settingsView);
                }
            })
        }
    });

    app.router = new appRouter();
    Backbone.history.start();
});