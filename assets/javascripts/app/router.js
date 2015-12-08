define([
  'app/util',
  'app/topmenu/topmenuV',
  'app/profile/profileM',
  'app/profile/profileV',
  'app/employees/employeesC',
  'app/employees/employeesV',
  'app/events/eventM',
  'app/events/eventsC',
  'app/events/eventsV',
  'app/events/eventEditV',
  'app/events/eventShowV',
  'app/userevent/usereventM',
  'app/userevent/usereventV',
  'app/userevent/usereventsC',
  'app/settings/settingsV',
  'app/role/roleM'
], function(util, TopMenu, ProfileModel, ProfileView,
  EmployeeCollection, EmployeesView,
  EventModel, EventCollection, EventsView, EventEditView, EventShowView,
  UserEvent, UserEventView, UserEvents,
  SettingsView, RoleModel) {

  var appRouter = Backbone.Router.extend({
    routes: {
      'employees': 'employees',
      'mypage': 'mypage',
      'mypage/(:param)': 'mypage',
      'employees/(:param)': 'employees',
      'events': 'events',
      'events/(:param)/edit': 'events_edit',
      'events/(:param)/show': 'events_show',
      'user_event/(:u_e)': 'user_event',
      'settings': 'settings',
      'settings/(:param)': 'settings',
      '*actions': 'resolvePage'
    },
    resolvePage: function() {
      if (window.location.search) {
        var hash = window.location.search.replace('?', '#');
        window.location = window.location.origin + window.location.pathname + hash;
      } else {
        Backbone.history.navigate('/mypage', {
          trigger: true
        });
      }
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
            util.logMeIn('/tercomin?mypage');
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
    employees: function(param) {
      var employees = new EmployeeCollection;
      var user_events = new UserEvents;
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
        success: function(r, d, s) {
          util.currentView.initScroll(req);
          user_events.fetch({
            data: {
              ids: JSON.stringify(r.pluck("id"))
            },
            success: function(r, d) {
              _.each(d, function(t) {
                var emp = this.get(t.user_id);
                if (emp) {
                  var evts = emp.get("events");
                  evts.add({ueid: t.user_id + '_' + t.event_id, name: t.name});
                }
              }, employees);
            },
            error: function(m, r) {
              console.log(r);
            }
          })
        },
        error: function(m, r) {
          console.log(r);
        }
      });
    },
    events: function() {
      var role = new RoleModel;
      var that = this;
      role.fetch({
        success: function(m, r) {
          that.role = r.role;
          var events = new EventCollection;
          events.fetch({
            success: function(m, r) {
              var eventsView = new EventsView({
                collection: events
              });
              eventsView.setRole(that.role);
              util.showView(eventsView);
            },
            error: function(m, r) {
              if (r.status === 422) {
                util.logMeIn('/tercomin?events');
              }
            },
          });
        },
        error: function(m, r) {
          if (r.status === 422) {
            util.logMeIn('/tercomin?events');
          }
        }
      })
    },
    events_edit: function(param) {
      var evnt = new EventModel;
      evnt.set("id", param);
      evnt.fetch({
        success: function(m, r) {
          var view = new EventEditView({
            model: evnt
          });
          util.showView(view);
        },
        error: function(m, r) {
          console.log(r);
        }
      });
    },
    events_show: function(param) {
      var evnt = new EventModel;
      evnt.set("id", param);
      evnt.fetch({
        success: function(m, r) {
          var view = new EventShowView({
            model: evnt
          });
          util.showView(view);
        },
        error: function(m, r) {
          console.log(r);
        }
      });
    },
    user_event: function(u_e) {
      var req = {
        'id': u_e
      };
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
            util.logMeIn('/tercomin?settings');
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