define([
  'text!app/events/event.html'
], function(EventT) {
  var view = Backbone.View.extend({
        tagName: 'li',
        template: _.template( EventT ),
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            rivets.bind(this.el, {
                evnt: this.model
            });            
            return this;
        }
    });
  return view
});