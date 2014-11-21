define([
  'i18n',
  'text!app/userevent/default.html',
  'text!app/userevent/hr.html',
  'text!app/userevent/questions.html'
], function(i18n, defaultT, hrT, questionsT) {
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

  Question = Backbone.Model.extend({
    validate: function(attrs, options) {
      if ( attrs.hasOwnProperty("a")) {
        var err = this.validateLength( attrs["a"], 1000);
        if (err) return err;        
      }      
    },
    validateLength: function(prop, len) {      
      if ( prop.length > len ) {
        return "Should be less than " + len + " symbols";
      }
    },
  });
  QuestionCollection = Backbone.Collection.extend({
        model: Question
  });

  QuestionsHeaderView = Backbone.View.extend({
    template: _.template($('#questions-header-template').html()),
    render: function() {
        this.$el.html('');
        this.$el.html(this.template({l:_tr}));
        rivets.bind(this.el, {
            t: this.model
        });            
        return this;
    }
  });

  TempView = Backbone.View.extend({
      tagName: 'li',
      templateName: '#question-template',
      template: _.template(questionsT),
      initialize:function () {
        if (this.model.has('type')) {
          this.templateName = '#'+this.model.get('type') + '-template';
        }
      },                  
      render: function() {
          this.$el.html('');
          this.$el.html($(this.template({l:_tr})).filter(this.templateName));
          rivets.bind(this.el, {
              t: this.model
          });            
          return this;
      }
  });

  QuestionsView = Backbone.View.extend({
      tagName: 'ul',
      className: 'questions-view',             
      render: function() {
          var qHeader = new QuestionsHeaderView({model: this.model});
          this.$el.append(qHeader.render().el);
          this.collection.each(function(q) {
              var view = new TempView({
                model: q
              });
              this.$el.append(view.render().el);
          }, this);            
          return this;
      }
  });

  //todo: remove
  EmployeeView = Backbone.View.extend({
      tagName: 'li',
      template: _.template($('#mgr-emp-li-template').html()),
      render: function() {
          this.$el.html('');
          this.$el.html(this.template);
          rivets.bind(this.el, {
              t: this.model
          });            
          return this;
      },
      save:function(){
          console.log("save emp");
      }
  });

  Employee = Backbone.Model.extend({});
  EmployeeCollection = Backbone.Collection.extend({
      model: Employee
  });

  ManagerFormView = Backbone.View.extend({
      tagName: 'ul',
      className: 'mgr-emp-view',
      items: new EmployeeCollection(),
      initialize: function() {
          this.items.reset(this.collection);
      },
      render: function() {            
          this.items.each(function(e) {                
              var empView = new EmployeeView({
                  model: e                    
              });
              this.$el.append(empView.render().el);
          }, this);            
          return this;
      },
      save:function(){
          console.log("save manager");
      }
  });

  var view = Backbone.View.extend({        
    template: _.template($('#user-event-template').html()), 
    HRtemplate: _.template($('#hr-emp-view').html()),        
    qs: new QuestionCollection(),
    kind:"",
    events: {
        'click .ue-submit': 'submit',
        'click .ue-cancel': 'cancel'
    },
    initialize: function() {
        this.kind = this.model.get('kind');
    },
    render: function() {
        this.$el.html('');
        if (this.kind === "hr") {
            this.$el.html(this.HRtemplate);
            rivets.bind(this.el, {
                t: this.model
            });
            _.each(this.model.get('mgrForms'), function(form){
                var data = $.parseJSON(form.data);
                var body = $.parseJSON(form.body);
                var qs = new QuestionCollection()
                qs.reset(body);
                qs.each(function(i){i.set('hrview', true);});
                var mgrView = new QuestionsView({
                    collection: qs,
                    model: data
                });
                mgrView.render();
                this.$el.find('.mgrs-ph').append(mgrView.$el);
            }, this);

            var data = $.parseJSON(this.model.get('empForm').data);
            var body = $.parseJSON(this.model.get('empForm').body);
            var qs = new QuestionCollection()
            qs.reset(body);
            qs.each(function(i){i.set('hrview', true);});
            var empView = new QuestionsView({
                collection: qs,
                model: data
            });
            empView.render();
            this.$el.find('.emp-ph').append(empView.$el);
        }
        else {
            this.$el.html(this.template);
            rivets.bind(this.el, {
                ue: this.model
            });         
            this.onRenderQuestions();  
        } 
        return this;
    },
    onRenderQuestions:function() {
        if (this.currentForm !== undefined)
                this.currentForm.remove();
        if (this.kind === "mgr") {
            var body = $.parseJSON(this.model.get('body'));
            var data = $.parseJSON(this.model.get('data'));

            this.qs.reset(body);
            this.currentForm = new QuestionsView({
                collection: this.qs,
                model: data
            });
            this.$el.find('.questions-ph').append(this.currentForm.$el);
            this.currentForm.render();
        } else if (this.kind === "self") {
            var body = $.parseJSON(this.model.get('body'));
            var data = $.parseJSON(this.model.get('data'));
            if (this.model.has('peons'))
              data.peons = this.model.get('peons');
            this.qs.reset(body);
            this.currentForm = new QuestionsView({
                collection: this.qs,
                model: data
            });            
            this.$el.find('.questions-ph').append(this.currentForm.$el);
            this.currentForm.render();
        }
    },
    cancel: function(e) {            
        this.remove();//todo: redirect
    },        
    submit: function(e) {
      that = this;      
      this.qs.each(function(q) { q.isValid() });        
      var hasErrors = _.some(this.qs.models, function(q) {
          return q.validationError;
      });
      if (!hasErrors) {
        this.model.set('body', JSON.stringify(that.qs) );            
        this.model.save({}, {
            success: function(model, response) {    
                console.log("save done");
            },
            error: function(model, response) {
                console.log("save: failed");
            }
        });
      } else{
        console.log("validation failed");
      }
    }
  });
  return view
});