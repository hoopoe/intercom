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
        }else{
            return date;
        }
    }

    app.logMeIn = function() {
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }
        window.location = window.location.origin + '/login?back_url=' + window.location.origin + '/tercomin';
    };

    var EmployerCollection = Backbone.Collection.extend({
        url: '/tercomin/api/v1/user_profile'
    });

    var Employer = Backbone.Model.extend({
        urlRoot: '/tercomin/api/v1/user_profile/',        
        validate: function(attrs, options) {
            
            if(attrs.profile.room_number){                 
                if (attrs.profile.room_number.length > 6) {                    
                  return "Room number should be less than 6 symbols";
                }  
                var re = /^[0-9\-]+$/;                
                if(!re.test(attrs.profile.room_number)) {
                  return "Room number is invalid /^[0-9\-]+$/";
                }
            }                    
        }
    });

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
            app.employer = new Employer(req);
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
            app.employer = new Employer(req);
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