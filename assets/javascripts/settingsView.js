var app = app || {};

$(function() {

    SettingsView = Backbone.View.extend({

        template: _.template($("#settings-template").html()),

        events: {
            'click .dropdown-menu > li > a': 'selectTheme'
        },

        initialize: function() {
            this.$el.html('');
            this.$el.html(this.template(this.model.toJSON()));
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        selectTheme: function(e) {
            e.preventDefault();
            var themeValue = e.currentTarget.getAttribute('value');
            var settings = {};
            settings.theme = themeValue;

            var user = this.model.get('user');
            user.settings = JSON.stringify(settings);
            this.model.save({}, {
                success: function(model, response) {
                    window.location.reload(true);
                    console.log("success");
                },
                error: function(model, response) {
                    console.log("error");
                }
            });
        }
    });
});