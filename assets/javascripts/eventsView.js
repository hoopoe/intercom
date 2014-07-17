var app = app || {};

$(function() {

    app.eventsTemplate = $("#events-template").html();

    EventsView = Backbone.View.extend({

        initialize: function() {
            this.$el.html('TBD');
        },

        render: function() {
            return this;
        }
    });
});