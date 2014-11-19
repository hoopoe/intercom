define([
  'text!app/profile/position/position.html'
], function(PositionT) {
  var view = Backbone.View.extend({
    tagName: 'li',
    template: _.template( PositionT ),
    render: function() {
        this.$el.html('');
        this.$el.html(this.template);
        rivets.bind(this.el, {
            position: this.model
        });            
        return this;
    }
  });
  return view
});