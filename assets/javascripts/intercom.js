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

    app.topMenuView = new TopMenuView();
    app.topMenuView.render(); //bind search event 

    var appRouter = Backbone.Router.extend({
        routes: {
            'employers': 'employers',
            'mypage': 'mypage',
            'mypage/(:param)': 'mypage',
            'employers/(:param)': 'employers',
            '*actions': 'mypage'
        },

        mypage: function(param) {
            if (param !== null) {
                app.employer = new Employer({
                    id: param
                });
                app.employer.fetch({
                    error: function(m, r) {
                        console.log(r.responseText);
                    },
                    success: function() {
                        var profileView = new ProfileView({
                            model: app.employer
                        });
                        app.showView(profileView);
                    }
                })
            } else {
                app.employer = new Employer({
                    id: "logged" //need to detect logged user
                });
                app.employer.fetch({
                    error: function(m, r) {
                        console.log(r.responseText);
                        window.location = window.location.origin + '/login?back_url=' + window.location.origin + '/intercom';
                    },
                    success: function() {
                        //we need only id. don't need to search for user inside api                        
                        // app.router.navigate("mypage/" + r.user.id, {
                        //     trigger: true
                        // });
                        var profileView = new ProfileView({
                            model: app.employer
                        });
                        app.showView(profileView);
                    }
                })
            }
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
        }
    });

    app.router = new appRouter();
    Backbone.history.start();
});