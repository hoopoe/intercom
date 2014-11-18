define([
  'text!app/profile/profile-classic.html'
], function(profileT) {
  var view = Backbone.View.extend({
    render: function() {

      // var data = new Backbone.Model({
      // });
      // data.set('id', 123456);
      // data.set('name', 'test');

      var template =  _.template( profileT );
      this.$el.html('');
      this.$el.html(template);


      rivets.bind(this.el, {
          user_p: this.model.get('data')
      });
      return this;
    }
  });
  return view;
});