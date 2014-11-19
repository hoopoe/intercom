define([
    'app/util',
    'app/profile/profileM',
    'app/profile/profileV',
    'app/settings/settingsV',
], function(util, ProfileModel, ProfileView, SettingsView) {
    $('#header').hide(); //todo: fix blinking
	var appRouter = Backbone.Router.extend({
        routes: {
            'employers': 'employers',
            'mypage': 'mypage',
            'mypage/(:param)': 'mypage',
            'employers/(:param)': 'employers',
            'events': 'events',
            'user_event/(:u_e)': 'user_event',
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
            var m = new ProfileModel(req);
            m.fetch({
                error: function(m, r) {
                    if (r.status === 422) { //not logged
                        util.logMeIn();
                    }
                },
                success: function(m, r) {
                    var profileView = new ProfileView({
                        model: m
                    });
                    util.showView(profileView);
                }
            });
        },
        settings: function(param) {            
            var req = {};
            if (param !== null) {
                req.id = param;
            } else {
                req.id = "logged";
            };
            var m = new ProfileModel(req);
            m.fetch({
                error: function(m, r) {
                    if (r.status === 422) { //not logged
                        util.logMeIn();
                    }
                },
                success: function(m, r) {
                    var settingsView = new SettingsView({
                        model: m
                    });
                    util.showView(settingsView);
                }
            })
        }
    });

    var initialize = function() {
    	var router = new appRouter();
    	Backbone.history.start();
    };

    return {
	    initialize: initialize
	};
});