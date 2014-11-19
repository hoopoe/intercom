define([
  'i18n',
  'text!profileTemplate'
], function(i18n, profileT) {
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
    events: {
      'mousedown .editable': 'editableClick',
      'dragover .profile-div': 'dragoverHandler',
      'drop .profile-div': 'dropHandler',
      'click .profile-img-save': 'profileImgSave',

      'click .add-position': 'addPosition',
      'click .remove-position': 'removePosition',
      'click .edit-position': 'editPosition',

      'click .add-background': 'addBackground',
      'click .remove-background': 'removeBackground',
      'click .edit-background': 'editBackground',

      'click .edit-emp-item a': 'editEmpItem',
      'click .emp-item-cancel': 'cancelEmpItem',
      'click .emp-item-save': 'saveEmpItem',
      'change #english_lvl': 'selectLanguage',
    },
    initialize: function() {      
      _.bindAll(this, 'save');
      this.model.bind('save', this.save);
    },
    render: function() {      
      var template =  _.template( profileT );
      this.$el.html('');
      this.$el.html(template({l:_tr}));
      rivets.bind(this.el, {
          user_p: this.model.get('data')
      });
      return this;
    },
    editEmpItem: function(e) {
      var prop = e.currentTarget.getAttribute('value');
      var dataModel = this.model.get('data').set('edit_prop', prop);
      if (prop === 'birthday') {
          var that = this; //todo: refactor tt
          $("#birthdayPicker").datepicker({
              changeYear: false,
              dateFormat: 'dd/mm',
              onSelect: function(dateText) {
                  var data = that.model.get('data');
                  data.set('birthday', dateText);
                  that.save();
              }
          });
      }
    },
    cancelEmpItem: function(e) {
        var prop = e.currentTarget.getAttribute('value');
        var dataModel = this.model.get('data').set('edit_prop', prop);
        dataModel.set(prop, this.model.getData(prop));
        this.model.get('data').set('edit_prop', "None");
        dataModel.isValid(); //remove validataion error
    },
    saveEmpItem: function(e) {
        var prop = e.currentTarget.getAttribute('value');
        var dataModel = this.model.get('data').set('edit_prop', prop);
        if (prop === 'summary' || prop === 'skills' || prop == 'coureses' || prop === 'extra_languages') {
            var tmp = $('.profile-' + prop);
            dataModel.set(prop, tmp.html());
        }
        if (!dataModel.isValid()) {
            var prop = this.model.get('data').get('edit_prop');
            var ntf = $('.' + prop + '-notify-fail');
            ntf.animate({
                opacity: 1
            });
            ntf.fadeTo(1000, 0);
        } else {
            this.save();
        }
    },
    save: function() {
      if (!this.model.isValid()) {
          var prop = this.model.get('data').get('edit_prop');
          var ntf = $('.' + prop + '-notify-fail');
          ntf.animate({
              opacity: 1
          });
          ntf.fadeTo(1000, 0);
          this.model.get('data').set('edit_prop', "None");                
      } else {
          this.model.save({}, {
              success: function(model, response) {                       
                  // Backbone.positionEvent.trigger('editItemCompleted', this.model);
              },
              error: function(model, response) {
              },
          });
      }
    }
  });
  return view;
});