var app = app || {};

$(function() {

    var AppView = Backbone.View.extend({});
    app = new AppView();
    app.employerTemplate = $("#employer-template").html();

    EmployerView = Backbone.View.extend({

        // tagName: "li",

        template: _.template(app.employerTemplate),

        initialize: function() {},

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
    });

    EmployersView = Backbone.View.extend({

        el: '.content',

        initialize: function() {
            this.$el.html('');
            // this.$el.append("<ul class='employer-list'> </ul>");
            this.$el.append("<div class='employer-list'> </div>");
        },

        render: function() {
            if (app.employers.length) {
                _.each(app.employers.models, this.addOne);
            }
            return this;
        },

        addOne: function(employer) {
            var view = new EmployerView({
                model: employer
            });
            this.$(".employer-list").append(view.render().el);
        }
    });

    MyPageView = Backbone.View.extend({
        el: '.content',
        render: function() {
            this.$el.html('<img src="http://dummyimage.com/600x500&text=Profile Info" alt="" />');
            return this;
        }
    });

    NewsView = Backbone.View.extend({
        el: '.content',
        render: function() {
            this.$el.html('<img src="http://dummyimage.com/600x500&text=News" alt="" />');
            return this;
        }
    });


    TopMenuView = Backbone.View.extend({
        el: '.top-menu',

        events: {
            'click .menu-item': 'selectPage',
            'keypress .search-control': 'search'
        },

        initialize: function() {},

        render: function() {
            return this;
        },

        selectPage: function(ev) {
            var urlPath = $(ev.currentTarget).attr('value').toLowerCase();
            app.router.navigate(urlPath, {
                trigger: true
            });
        },

        search: function(e) {
            if (e.which === 13) {
                var keywords = $(e.target).val();

                if (keywords === '') return;

                app.router.navigate('/employers/' + keywords, {
                    trigger: true
                });
            }
        }
    });
});