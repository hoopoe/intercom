var app = app || {};

$(function() {

    app.employerTemplate = $("#employer-template").html();

    EmployerView = Backbone.View.extend({

        template: _.template(app.employerTemplate),

        initialize: function() {},

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
    });

    EmployersView = Backbone.View.extend({

        initialize: function() {
            this.$el.html('');
            this.$el.append("<div class='employer-list'> </div>");
            this.listenTo(this.collection, 'add', this.add);
        },

        add: function(item) {
            var view = new EmployerView({
                model: item
            });
            this.$(".employer-list").append(view.render().el);
        },

        initScroll: function() {
            this.infiniScroll = new Backbone.InfiniScroll(this.collection, {
                success: this.appendRender,
                includePage: true,
                pageSizeParam: "limit"
            });
        },

        appendRender: function(items) {
            //todo
        },

        render: function() {
            // if (app.employers.length) {
            //     _.each(app.employers.models, this.addOne);
            // }
            return this;
        },

        addOne: function(employer) {
            // var view = new EmployerView({
            //     model: employer
            // });
            // this.$(".employer-list").append(view.render().el);
        },

        onClose: function() {
            this.infiniScroll.destroy();
            // return Backbone.View.prototype.remove.call(this);
        }
    });

    NewsView = Backbone.View.extend({
        el: '.content',

        initialize: function() {
            this.$el.html('');
        },

        render: function() {
            this.$el.html('<img src="http://dummyimage.com/600x500&text=News" alt="" />');
            return this;
        }
    });

    GroupsView = Backbone.View.extend({
        el: '.content',
        render: function() {
            this.$el.html('<img src="http://dummyimage.com/600x500&text=Groups" alt="" />');
            return this;
        }
    });
});