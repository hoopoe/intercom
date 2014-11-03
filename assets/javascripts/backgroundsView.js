 var app = app || {};

$(function() {	
	app.Background = Backbone.Model.extend({});
 	app.BackgroundCollection = Backbone.Collection.extend({
        model: app.Background
    });

    app.BackgroundView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#background-li-template').html()),
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            rivets.bind(this.el, {
                background: this.model
            });            
            return this;
        }
    });

	app.AddOrUpdateBackgroundView = Backbone.View.extend({
        className: 'background-container',
        template: _.template($('#background-template').html()),
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
            Backbone.positionEvent.trigger('backgroundSubmit', this.model);
        }
    });

	app.BackgroundsView = Backbone.View.extend({
        tagName: 'ul',
        className: 'backgrounds-view',
        editable: false,        
        setEditable:function(e) { this.editable = e; },
        render: function() {        	
            this.collection.each(function(background) {
                background.set('editable', this.editable);                
                var backgroundView = new app.BackgroundView({
                    model: background                    
                });
                this.$el.append(backgroundView.render().el);
            }, this);            
            return this;
        }
    });
});