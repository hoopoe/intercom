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
    $('#header').hide();//hide redmine big logo
    

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

    app.employers = new app.EmployerCollection;
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
            var empView = new app.EmployersView({
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