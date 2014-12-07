define([
  'i18n',
], function(i18n) {
  var i18NOptions = { 
      detectFromHeaders: false,
      lng: document.documentElement.lang || window.navigator.userLanguage || window.navigator.language || 'en-US',
      fallbackLang: 'en',
      ns: 'app',
      resGetPath: 'plugin_assets/tercomin/javascripts/app/locales/__lng__/__ns__.json',
      fallbackLng: false
  };
  var _tr = null;
  i18n.init(i18NOptions, function (tr) {
    _tr = tr;
  }); 
  var view = Backbone.View.extend({
    el: '.top-menu',
    events: {
        'click .menu-item': 'selectPage',
        'click .btn-search': 'searchByClick',
        'keypress .search-control': 'search',
    },

    initialize: function() {
    },

    render: function() {
        return this;
    },

    activate: function(name) {
        $("li[value='" + name + "']").addClass("active");
    },

    deactivate: function() {
        $("li.menu-item").removeClass("active");
    },

    selectPage: function(ev) {        
        var urlPath = ev.currentTarget.getAttribute('value');
        Backbone.history.navigate(urlPath, {
            trigger: true
        });        
    },

    search: function(e) {
        if (e.which === 13) {
            var keywords = $(e.target).val();
            
            if (keywords === '') {
                Backbone.history.navigate('/employees', {
                    trigger: true
                });
            } else {
                Backbone.history.navigate('/employees/' + keywords, {
                    trigger: true
                });
            }
        }
    },

    searchByClick: function(e) {
        var keywords = $('.search-control').val();
        if (keywords === '') {
            Backbone.history.navigate('/employees', {
                trigger: true
            });
        } else {
            Backbone.history.navigate('/employees/' + keywords, {
                trigger: true
            });
        }
    },

    setSearch: function(criteria) {
        $('.search-control').val(criteria);
    }
  })
  return view
});