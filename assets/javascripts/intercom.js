var app = app || {};

$(function() {

    $('#header').hide();
    //global
    //app.employers - collection of userprofiles
    //app.router - backbone router

    var EmployerCollection = Backbone.Collection.extend({
        url: 'http://localhost:3000/api/user_profile.json'
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
            console.log('search route');
            console.log('param: ' + param);

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
            console.log("mypage route");
            var myPageView = new MyPageView();
            myPageView.render();
        },

        groups: function() {
            console.log("groups view is missing. see intercom_view.js");
        },

        employers: function(param) {
            if (param !== null) {
                Employers.fetch({
                    wait: true
                });
                Employers = Employers.filter(function(t) {
                    return t.get('name') === param;
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
            console.log("news route");
            var newsView = new NewsView();
            newsView.render();
        }
    });

    app.router = new appRouter();
    Backbone.history.start();
});