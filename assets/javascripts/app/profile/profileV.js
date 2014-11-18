define([
  'app/profile/profileM',
  'text!app/profile/profile.html'
], function(profileM, profileT) {
  var TestView = Backbone.View.extend({
    render: function() {
      var data = {'id': 123};
      var template =  _.template( profileT );
      this.$el.html('');
      this.$el.html(template);
      console.log(this.el);
      rivets.bind(this.el, {
          user_p: data
      });
      return this;
    }
  });
  return TestView;
});