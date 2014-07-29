var app = app || {};

$(function() {

    SettingsView = Backbone.View.extend({

        template: _.template($("#settings-template").html()),

        initialize: function() {
            // this.$el.html('TBD');
            this.$el.html('');
            this.$el.html(this.template(this.model.toJSON()));
            $('.dropdown-menu li').click(function(e) {
                console.log("tt");
                e.preventDefault();
            });
            // console.log($('.dropdown-menu li'));
        },

        render: function() {
            return this;
        }
    });
});