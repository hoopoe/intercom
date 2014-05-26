var app = app || {};

$(function() {

    app.EventAggregator = _.extend({}, Backbone.Events);

    app.EventAggregator.on('skills:edit', function(profile) {
        console.log("skills edit");
        var skillsEdit = new ProfileSkillsEditView({
            model: profile
        });

        $('.skillsPh').html(skillsEdit.render().el);
    });

    app.EventAggregator.on('skills:cancel', function(profile) {
        console.log("skills cancel");

        var skills = new ProfileSkillsView({
            model: profile
        });

        $('.skillsPh').html(skills.render().el);
    });

    app.EventAggregator.on('skills:save', function(profile) {
        console.log("skills save");
    });

    ProfileSkillsView = Backbone.View.extend({

        template: _.template($("#skills-template").html()),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    ProfileSkillsEditView = Backbone.View.extend({

        template: _.template($("#edit-skills-template").html()),

        events: {
            'click .cancelEditSkillsBtn': 'cancel',
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        cancel: function() {
            app.EventAggregator.trigger('skills:cancel', this.model);
        }
    });

    ProfileView = Backbone.View.extend({

        template: _.template($("#profile-template").html()),

        events: {
            'click .editSkillsBtn': 'edit',
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

        edit: function() {
            app.EventAggregator.trigger('skills:edit', this.model);
        },

    });
});