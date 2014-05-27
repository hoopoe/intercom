var app = app || {};

$(function() {

    ProfileView = Backbone.View.extend({

        template: _.template($("#profile-template").html()),

        events: {
            'mousedown .editable': 'editableClick'
        },

        initialize: function() {
            _.bindAll(this, 'save');
            this.model.bind('save', this.save);
        },

        render: function() {
            this.$el.html('');
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        editableClick: etch.editableInit,

        save: function() {
            var skills = this.$('.editable').text();
            this.model.save({
                skills: skills
            });
            console.log(skills);
        }
    });
});