define([
  'app/events/eventV'
], function(EventView, RoleModel) {
  var view = Backbone.View.extend({
    name: "events",
    tagName: 'ul',
        className: 'events-view',
        currentId: undefined,
        admin: undefined,
        hr: undefined,
        initialize: function() {
          var id = $('#loggedas a').first().attr('href');
          if (id.length > 0) {
            this.currentId = id.substring(id.lastIndexOf('/') + 1, id.length);
          }
        },
        setRole: function(role) {
          if (role === "admin") {
            this.admin = "admin";
            this.hr = "hr";
          }
          if (role === "hr") {
            this.hr = "hr";
          }
        },
        render: function() {
          this.collection.each(function(evnt) {
            if (this.currentId) {
              evnt.set("ue_id", (this.currentId + "_" + evnt.get('event').id) );
              evnt.set("admin", this.admin);
              evnt.set("hr", this.hr);
            }
            var eventView = new EventView({
                model: evnt                    
            });
            this.$el.append(eventView.render().el);
          }, this);            
          return this;
        }  
  })
  return view
});