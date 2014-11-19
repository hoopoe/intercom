define([
  'text!app/profile/background/background.html'
], function(BackT) {
  var view = Backbone.View.extend({
    tagName: 'li',
    template: _.template( BackT ),
    render: function() {
        this.$el.html('');
        this.$el.html(this.template);
        rivets.bind(this.el, {
            background: this.model
        });            
        return this;
    }
  });
  return view
});