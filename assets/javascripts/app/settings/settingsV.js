define([
  'i18n',  
  'text!settigsTemplate'
], function(i18n, settingsT) {
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
    name: "settings",
    events: {        
        'change .theme-settings': 'selectTheme',
    },
    render: function() {      
      var template =  _.template( settingsT );
      this.$el.html('');
      this.$el.html(template({l:_tr}));
      if (this.model.has('profile')) {
        var profileModel = this.model.get('profile');
        var settings = $.parseJSON(profileModel.settings);
        rivets.bind(this.el, {
            settings: settings
        });    
      }
      return this;
    },
    selectTheme: function(e) {      
      e.preventDefault();
      var themeValue = e.currentTarget.value;
      var settings = {};
      settings.theme = themeValue;      
      var map = {};
      map["settings"] = JSON.stringify(settings);      
      this.model.set('profile', map);      
      this.model.save({}, {
          success: function(model, response) {
              window.location.reload(true);              
          },
          error: function(model, response) {              
          }
      });
    }   
  })

  return view;
});