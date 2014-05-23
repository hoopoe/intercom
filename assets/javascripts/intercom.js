var app = app || {};

$(function() {

    $('#header').hide();
    $('#top-menu').hide();
    //app.employers - collection of userprofiles
    //app.router - backbone router
    //app.employer

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
                error: function() {
                    console.log("some errors");
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
                        var myPageView = new MyPageView({
                            model: app.employer
                        });
                        myPageView.render();
                    }
                })
            } else {
                var myPageView = new MyPageView({
                    model: app.employers.first()
                });
                myPageView.render();
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
                    error: function() {
                        console.log("some errors");
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