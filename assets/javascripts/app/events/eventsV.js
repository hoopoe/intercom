define([
  'app/events/eventV'
], function(EventView) {
  var view = Backbone.View.extend({
    tagName: 'ul',
        className: 'events-view',
        currentId: undefined,
        initialize: function() {
          var id = $('#loggedas a').first().attr('href');
          if (id.length > 0) {
            this.currentId = id.substring(id.lastIndexOf('/') + 1, id.length);
          }
        },
        render: function() {
            this.collection.each(function(evnt) {
              if (this.currentId) {
                evnt.set("ue_id", (this.currentId + "_" + evnt.get('event').id) );
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