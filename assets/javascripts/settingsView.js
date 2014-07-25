var app = app || {};

$(function() {

    app.settingsTemplate = $("#settings-template").html();

    SettingsView = Backbone.View.extend({

        initialize: function() {
            this.$el.html('TBD');
        },

        render: function() {
            return this;
        }
    });
});