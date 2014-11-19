define([
  'text!app/profile/background/addUpdate.html'
], function(BackT) {
  var view = Backbone.View.extend({
    className: 'background-container',
    template: _.template( BackT ),
    events: {
        'click .add-background-cancel': 'cancel',
        'click .add-background-submit': 'submit',
        'mouseover .background-from': 'createFromBackgroundPicker',
        'mouseover .background-to': 'createToBackgroundPicker',
    },
    createFromBackgroundPicker: function(e) {  
        var that = this; 
        $(e.currentTarget).datepicker({
            dateFormat: 'M dd, yy', 
            onSelect: function(dateText) {
                that.model.set('from', dateText);                   
            }
        });      
    },
    createToBackgroundPicker: function(e) {  
        var that = this; 
        $(e.currentTarget).datepicker({
            dateFormat: 'M dd, yy', 
            onSelect: function(dateText) {
                that.model.set('to', dateText);                   
            }
        });      
    },
    render: function() {
        this.$el.html('');
        this.$el.html(this.template);
        rivets.bind(this.el, {
            background: this.model
        });
        return this;
    },
    cancel: function(e) {            
        this.remove();
    },
    submit: function(e) {                 
        Backbone.profileEvent.trigger('backgroundSubmit', this.model);
    }
  });
  return view
});