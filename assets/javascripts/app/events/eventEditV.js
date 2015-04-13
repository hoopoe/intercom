define([
  'text!app/events/eventEdit.html'
], function(EventEditT) {
  var view = Backbone.View.extend({
    template: _.template(EventEditT),
    events: {
      'click .event-save': 'save'
    },
    render: function() {
      this.$el.html('');
      this.$el.html(this.template);
      rivets.bind(this.el, {
        evnt: this.model
      });
      return this;
    },
    save: function() {
      if (!this.model.isValid()) {
        var msg = this.model.validationError;
        $.notify({
          title: "Error: ",
          message: msg
        }, {
          type: "danger"
        });
      } else {
        this.model.save({}, {
          success: function(model, response) {
            $.notify({
              title: "Success: ",
              message: "Event saved!"
            }, {
              type: "success"
            });
          },
          error: function(model, response) {
            $.notify({
              title: "Error: ",
              message: "Server error"
            }, {
              type: "danger"
            });
          },
        });
      }
    }
  });
  return view
});