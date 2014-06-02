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


$(function() {

    $('#header').hide();
    $('#top-menu').hide();
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

    app.showView = function(view) {
        if (app.currentView) {
            app.currentView.close();
        }
        app.currentView = view;
        app.currentView.render();
        $(".content").html(app.currentView.el);
    };

    var EmployerCollection = Backbone.Collection.extend({
        url: '/api/user_profile'
    });

    var Employer = Backbone.Model.extend({
        urlRoot: '/api/user_profile/'
    });

    app.employers = new EmployerCollection;

    // app.employersView = new EmployersView({
    //     collection: app.employers
    // });
    // app.employer = new Employer;
    app.topMenuView = new TopMenuView();
    app.topMenuView.render(); //bind search event 

    var appRouter = Backbone.Router.extend({
        routes: {
            'employers': 'employers',
            'news': 'news',
            'mypage': 'mypage',
            'mypage/(:param)': 'mypage',
            'groups': 'groups',
            'employers/(:param)': 'employers',
            '*actions': 'default'
        },

        default: function() {
            app.employers.reset();
            var empView = new EmployersView({
                collection: app.employers
            });
            app.showView(empView);

            app.employers.fetch({
                error: function(m, resp) {
                    console.log(resp.responseText);
                },
                success: function() {
                    //add event attached
                    app.currentView.initScroll();
                }
            });
        },

        mypage: function(param) {
            if (param !== null) {
                app.employer = new Employer({
                    id: param
                });
                app.employer.fetch({
                    error: function() {
                        console.log("some errors");
                    },
                    success: function() {
                        var profileView = new ProfileView({
                            model: app.employer
                        });
                        // myPageView.render();
                        $(".content").html(profileView.render().el)
                    }
                })
            } else {
                var profileView = new ProfileView({
                    model: app.employers.first()
                });
                profileView.render();
            }
        },

        employers: function(param) {
            app.employers.reset();
            var empView = new EmployersView({
                collection: app.employers
            });
            app.showView(empView);

            if (param !== null) {
                app.employers.fetch({
                    data: {
                        skills: param.split(' ')
                    },
                    error: function() {
                        console.log("some errors");
                    },
                    success: function() {
                        //add event attached
                        app.currentView.initScroll();
                    }
                });
            } else {
                app.employers.fetch({
                    error: function(e) {
                        // console.log("some errors");
                        console.log(e);
                    },
                    success: function() {
                        //add event attached
                        app.currentView.initScroll();
                    }
                });
            }
        },

        news: function() {
            var newsView = new NewsView();
            newsView.render();
        },


        groups: function() {
            var groupsView = new GroupsView();
            groupsView.render();
        }

    });

    app.router = new appRouter();
    Backbone.history.start();
});