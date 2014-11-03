 var app = app || {};

$(function() {
 	app.Position = Backbone.Model.extend({});
 	app.PositionCollection = Backbone.Collection.extend({
        model: app.Position
    });

    app.PositionView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#position-li-template').html()),
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            rivets.bind(this.el, {
                position: this.model
            });            
            return this;
        }
    });

    app.AddOrUpdatePositionView = Backbone.View.extend({
        className: 'position-container',
        template: _.template($('#position-template').html()),
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
            Backbone.positionEvent.trigger('positionSubmit', this.model);
        }
    });

    app.PositionsView = Backbone.View.extend({
        tagName: 'ul',
        className: 'positions-view',
        editable: false,        
        setEditable:function(e) {
            this.editable = e;            
        },
        render: function() {
            this.collection.each(function(position) {
                position.set('editable', this.editable);                
                var positionView = new app.PositionView({
                    model: position                    
                });
                this.$el.append(positionView.render().el);
            }, this);            
            return this;
        }
    });
});