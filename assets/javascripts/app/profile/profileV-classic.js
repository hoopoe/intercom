define([
  'text!app/profile/profile-classic.html'
], function(profileT) {
  var TestView = Backbone.View.extend({
    constructor: function(options) {
        this.options = options || {};
        Backbone.View.apply(this, arguments);
    },
    initialize: function(options) {
      console.log(this.options.test);
    },
    render: function() {
      // var data = {'id': 123};
      var data = new Backbone.Model({
        // id: '12345',
        // name: 'test'
      });
      data.set('id', 123456);
      data.set('name', 'test');
      var template =  _.template( profileT );
      this.$el.html('');
      this.$el.html(template);

      console.log(data);
      console.log(rivets);
      rivets.bind(this.el, {
          t: data
      });
      return this;
    }
  });
  return TestView;
});