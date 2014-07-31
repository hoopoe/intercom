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

            if (this.model.get('user')) {
                console.log(this.model.get('user'));
            } else {
                console.log("don't have settings");
            }

            // $('.dropdown-menu li').click(function(e) {
            //     console.log("tt");
            //     e.preventDefault();
            // });
            // console.log($('.dropdown-menu li'));
        },

        render: function() {
            return this;
        },

        selectTheme: function(e) {
            e.preventDefault();
            // window.tt = e;
            console.log(e.currentTarget.getAttribute('value'));
        }
    });
});