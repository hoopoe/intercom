var app = app || {};

$(function() {

    $('#header').hide();
    $('#top-menu').hide();
    //global
    //app.employers - collection of userprofiles
    //app.router - backbone router

    var EmployerCollection = Backbone.Collection.extend({
        url: 'http://localhost:3000/api/user_profile.json'
        //url: 'http://nfrey/api/user_profile.json'
    });

    app.employers = new EmployerCollection

    var appRouter = Backbone.Router.extend({
        routes: {
            'employers': 'employers',
            'news': 'news',
            'mypage': 'mypage',
            'groups': 'groups',
            'employers/(:param)': 'employers',
            '*actions': 'search'
        },

        search: function(param) {
            var topMenuView = new TopMenuView();
            topMenuView.render(); //bind search event        

            app.employers.fetch({
                error: function() {
                    console.log("some errors");
                },
                success: function() {
                    var empView = new EmployersView({});
                    empView.render();
                }
            });
        },

        mypage: function() {
            var myPageView = new MyPageView();
            myPageView.render();
        },

        employers: function(param) {
            if (param !== null) {
                app.employers.fetch({
                    data: {
                        skills: param.split(' ')
                    },
                    error: function() {
                        console.log("some errors");
                    },
                    success: function() {
                        var empView = new EmployersView({});
                        empView.render();
                    }
                });
            } else {
                app.employers.fetch({
                    error: function() {
                        console.log("some errors");
                    },
                    success: function() {
                        var empView = new EmployersView({});
                        empView.render();
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