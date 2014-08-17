var app = app || {};

$(function() {

    SettingsView = Backbone.View.extend({
        name: "settings",

        template: _.template($("#settings-template").html()),

        events: {
            'change .theme-select': 'select'
        },

        initialize: function() {
            this.$el.html('');
            this.$el.html(this.template(this.model.toJSON()));
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        select: function(e) {
            e.preventDefault();
            var themeValue = e.currentTarget.value;
            var settings = {};
            settings.theme = themeValue;
            
            var map = {};
            map["settings"] = JSON.stringify(settings);
            this.model.set('profile', map);
            // this.model.save();
            this.model.save({}, {
                success: function(model, response) {
                    window.location.reload(true);
                    // console.log("success");
                },
                error: function(model, response) {
                    // console.log("error");
                }
            });
        }
    });
});