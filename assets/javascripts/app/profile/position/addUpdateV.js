define([
  'text!app/profile/position/addUpdate.html'
], function(T) {
  var view = Backbone.View.extend({
  	className: 'position-container',
    template: _.template(T),
    events: {
        'click .add-position-cancel': 'cancel',
        'click .add-position-submit': 'submit',
        'mouseover .pos-from': 'createFromPicker',
        'mouseover .pos-to': 'createToPicker',
    },
    createFromPicker: function(e) {  
        var that = this; //todo: refactor tt
        $(e.currentTarget).datepicker({
            dateFormat: 'M dd, yy', 
            onSelect: function(dateText) {
                that.model.set('from', dateText);                   
            }
        });      
    },
    createToPicker: function(e) {  
        var that = this; //todo: refactor tt
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
            position: this.model
        });
        return this;
    },
    cancel: function(e) {            
        this.remove();
    },
    submit: function(e) {                 
        Backbone.profileEvent.trigger('positionSubmit', this.model);
    }
  })
    return view;
});