var app = app || {};

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