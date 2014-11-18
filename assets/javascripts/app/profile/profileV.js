define([
  'i18n',
  'text!app/profile/profile.html'
], function(i18n, profileT) {
  console.log(document.documentElement.lang);
  var i18NOptions = { 
      detectFromHeaders: false,
      lng: document.documentElement.lang || window.navigator.userLanguage || window.navigator.language || 'en-US',
      fallbackLang: 'en',
      ns: 'app',
      resGetPath: 'plugin_assets/tercomin/javascripts/app/locales/__lng__/__ns__.json',
      // useCookie: false,
      fallbackLng: false,
      // debug: false
  };
  var _tr = null;
  i18n.init(i18NOptions, function (tr) {
    _tr = tr;
  });
  var view = Backbone.View.extend({
    render: function() {
      var template =  _.template( profileT );
      this.$el.html('');
      this.$el.html(template({l:_tr}));
      // this.$el.i18n();
      // console.log(i18n);
      rivets.bind(this.el, {
          user_p: this.model.get('data')
      });
      // $(".nav").i18n();
      return this;
    }
  });
  return view;
});