define([
  'i18n',
	'text!employeeTemplate'
], function(i18n, EmployeeT) {
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
        render: function() {
        	var template =  _.template( EmployeeT );
      		this.$el.html('');
      		this.$el.html(template({l:_tr}));
          var Data = Backbone.Model.extend({
            defaults: {
              'id':'',
              'lastname':'',
              'firstname':'',
              'mail':'',
              'project':'',
              'project_extra':'',
              'room_number':''
            }
          });

          var data = JSON.parse(this.model.get('data'));
          var d = new Data(data);
          d.set('id', this.model.get('id'));
          d.set('mail', this.model.get('mail'));
          d.set('firstname', this.model.get('firstname'));
          d.set('lastname', this.model.get('lastname'));
          d.set('events', this.model.get('events'));
          d.set('avatar_url', this.model.get('avatar_url'));
          rivets.bind(this.el, {
              emp: d
          });
          return this;
        },
    });
    return view;
});