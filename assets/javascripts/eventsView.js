var app = app || {};

$(function() {
    app.eventsTemplate = $("#events-template").html();

    app.Event = Backbone.Model.extend({
        urlRoot: '/tercomin/api/v1/event'
    });
    app.EventCollection = Backbone.Collection.extend({
        url: '/tercomin/api/v1/event',
        model: app.Event
    });

    app.EventView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#event-li-template').html()),
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            rivets.bind(this.el, {
                evnt: this.model
            });            
            return this;
        }
    });

    app.EventsView = Backbone.View.extend({
        name: "events",
        tagName: 'ul',
        className: 'events-view',
        render: function() {
            this.collection.each(function(evnt) {             
                var eventView = new app.EventView({
                    model: evnt                    
                });
                this.$el.append(eventView.render().el);
            }, this);            
            return this;
        }
    });
});