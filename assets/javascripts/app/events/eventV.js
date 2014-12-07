define([
  'i18n',
  'text!app/events/event.html'
], function(i18n, EventT) {
  var i18NOptions = {
    detectFromHeaders: false,
    lng: document.documentElement.lang || window.navigator.userLanguage || window.navigator.language || 'en-US',
    fallbackLang: 'en',
    ns: 'app',
    resGetPath: 'plugin_assets/tercomin/javascripts/app/locales/__lng__/__ns__.json',
    fallbackLng: false
  };
  var _tr = null;
  i18n.init(i18NOptions, function(tr) {
    _tr = tr;
  });
  var view = Backbone.View.extend({
    tagName: 'li',
    template: _.template(EventT),
    render: function() {
      this.$el.html('');
      this.$el.html(this.template({
        l: _tr
      }));
      rivets.bind(this.el, {
        evnt: this.model
      });
      return this;
    }
  });
  return view
});