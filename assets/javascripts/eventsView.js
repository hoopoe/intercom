var app = app || {};

$(function() {

    app.eventsTemplate = $("#events-template").html();

    EventsView = Backbone.View.extend({

        initialize: function() {
            this.$el.html('Put events here');
        },

        render: function() {
            return this;
        }
    });
});