define([
    'app/util',
    'app/topmenu/topmenuV',
    'app/profile/profileM',
    'app/profile/profileV',
    'app/employees/employeesC',
    'app/employees/employeesV',
    'app/events/eventsC',
    'app/events/eventsV',
    'app/userevent/usereventM',
    'app/userevent/usereventV',
    'app/settings/settingsV',
], function(util, TopMenu, ProfileModel, ProfileView,
  EmployeeCollection, EmployeesView,
  EventCollection, EventsView,
  UserEvent, UserEventView,
  SettingsView) {
    
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
        employers: function(param) {
            var employees = new EmployeeCollection;
            var view = new EmployeesView({
                collection: employees
            });
            util.showView(view);
            var req = {};
            if (param !== null) {
                req.criteria = param.split(' ');
            }
            employees.fetch({
                data: req,
                error: function(m, r) {
                    console.log(r.responseText);
                },
                success: function() {
                    util.currentView.initScroll(req);
                }
            });
        },
        events: function() {
            // app.events.reset();
            var events = new EventCollection;
            events.fetch({                
                success: function(m, r) {
                    var eventsView = new EventsView({
                        collection: events
                    });
                    util.showView(eventsView);
                },
                error: function(m, r) {
                    console.log(r.responseText);
                },
            });
        },
        user_event: function(u_e) {            
            var req = {'id': u_e};            
            var userEvent = new UserEvent(req);
            userEvent.fetch({                
                success: function(m, r) {                    
                    var ueView = new UserEventView({
                        model: userEvent
                    });
                    util.showView(ueView);
                },
                error: function(m, r) {
                    util.showError(r.responseText); //TODO:
                },
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