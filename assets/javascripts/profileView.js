var app = app || {};

$(function() {

    ProfileSkillsView = Backbone.View.extend({

        template: _.template($("#skills-template").html()),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    ProfileSkillsEditView = Backbone.View.extend({

        template: _.template($("#edit-skills-template").html()),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    ProfileView = Backbone.View.extend({

        template: _.template($("#profile-template").html()),

        // editSkillsTemplate: _.template($("#edit-skills-template").html()),

        events: {
            'click .editSkillsBtn': 'editSkills',
            'click .cancelEditSkillsBtn': 'cancelEditSkills',
        },

        initialize: function() {},

        render: function() {
            this.$el.html('');
            this.$el.html(this.template(this.model.toJSON()));

            var skills = new ProfileSkillsView({
                model: this.model
            });

            this.$el.find('.skillsPh').html(skills.render().el);
            return this;
        },

        editSkills: function() {
            var skillsEdit = new ProfileSkillsEditView({
                model: this.model
            });

            this.$el.find('.skillsPh').html(skillsEdit.render().el);
        },

        cancelEditSkills: function() {
            var skills = new ProfileSkillsView({
                model: this.model
            });

            this.$el.find('.skillsPh').html(skills.render().el);
        },
    });
});