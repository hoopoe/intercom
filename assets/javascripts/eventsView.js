var app = app || {};

$(function() {

    app.eventsTemplate = $("#events-template").html();

    app.EventCollection = Backbone.Collection.extend({
        url: '/tercomin/api/v1/event'
    });

    EventsView = Backbone.View.extend({
        name: "events",

        initialize: function() {
            this.$el.html('TBD');
        },

        render: function() {
            return this;
        }
    });
});