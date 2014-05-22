var app = app || {};

$(function() {

    var AppView = Backbone.View.extend({});
    app = new AppView();
    app.employerTemplate = $("#employer-template").html();
    app.myPageTemplate = $("#employer-detail-template").html();

    EmployerView = Backbone.View.extend({

        // tagName: "li",

        template: _.template(app.employerTemplate),

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
    });

    EmployersView = Backbone.View.extend({

        el: '.content',

        initialize: function() {
            this.$el.html('');
            this.$el.append("<div class='employer-list'> </div>");
            this.listenTo(this.collection, 'add', this.test);
        },

        test: function(item) {
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

        remove: function() {
            this.infiniScroll.destroy();
            return Backbone.View.prototype.remove.call(this);
        }
    });

    MyPageView = Backbone.View.extend({

        el: '.content',

        template: _.template(app.myPageTemplate),

        initialize: function() {},

        render: function() {
            this.$el.html('');
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
    });

    NewsView = Backbone.View.extend({
        el: '.content',
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

    TopMenuView = Backbone.View.extend({
        el: '.top-menu',

        events: {
            'click .menu-item': 'selectPage',
            'click .btn-search': 'searchByClick',
            'keypress .search-control': 'search',
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

                //if (keywords === '') return;
                if (keywords === '') {
                    app.router.navigate('/employers', {
                        trigger: true
                    });
                } else {
                    app.router.navigate('/employers/' + keywords, {
                        trigger: true
                    });
                }
            }
        },

        searchByClick: function(e) {
            var keywords = $('.search-control').val();
            if (keywords === '') {
                app.router.navigate('/employers', {
                    trigger: true
                });
            } else {
                app.router.navigate('/employers/' + keywords, {
                    trigger: true
                });
            }
        }
    });
});