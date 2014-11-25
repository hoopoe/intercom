define([
  'i18n',
  'text!app/userevent/default.html',
  'text!app/userevent/hr.html',
  'text!app/userevent/questions.html',
  'text!app/userevent/questions_ro.html',
  'text!app/userevent/hrForm.html',
  'text!app/userevent/manager.html',
  'text!app/userevent/employee.html'
], function(i18n, defaultT, hrT, questionsT, questions_ro_T, hrFormT, managerT, employeeT) {
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

  Employee = Backbone.Model.extend({});
  EmployeeCollection = Backbone.Collection.extend({
      model: Employee
  });

  Question = Backbone.Model.extend({
    validate: function(attrs, options) {
      if ( attrs.hasOwnProperty("a")) {
        var err = this.validateLength( attrs["a"], 3);
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

  HRResultView = Backbone.View.extend({
    template: _.template(hrFormT),
    qs: new QuestionCollection(),
    render: function() {
      this.$el.html('');
      this.$el.html(this.template({l:_tr}));
      console.log(this.model);
      // rivets.bind(this.el, {
      //     t: this.model
      // });
      this.qs.reset(this.model);
      var qsView = new QuestionsView({
          collection: this.qs
      });
      qsView.render()
      this.$el.append(qsView.render);       
      return this;
    }
  });

  QuestionsHeaderView = Backbone.View.extend({
    template: _.template(questionsT),
    render: function() {
        this.$el.html('');
        this.$el.html($(this.template({l:_tr})).filter('#questions-header-template'));
        rivets.bind(this.el, {
            t: this.model
        });            
        return this;
    }
  });

  QuestionView = Backbone.View.extend({
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

  QuestionROView = QuestionView.extend({
    template: _.template(questions_ro_T)
  });

  QuestionsView = Backbone.View.extend({
    tagName: 'ul',
    className: 'questions-view',             
    render: function() {
      this.collection.each(function(q) {
        var view = new QuestionView({ model: q });
        this.$el.append(view.render().el);
      }, this);        
      return this;
    }
  });

  QuestionsROView = Backbone.View.extend({
    tagName: 'ul',
    className: 'questions-view',             
    render: function() {
      this.collection.each(function(q) {
        var view = new QuestionROView({ model: q });
        this.$el.append(view.render().el);
      }, this);        
      return this;
    }
  });

  EmployeeView = Backbone.View.extend({
    template: _.template(employeeT),
    qs: new QuestionCollection(),
    hrqs: new QuestionCollection(),
    name: "empForm",
    data: undefined,
    events: {
      'click .save-ue': 'save'
    },
    render: function() {
      this.$el.html(this.template);
      rivets.bind(this.el, {
        ue: this.model //used to display errors
      });
      var body = $.parseJSON(this.model.get(this.name));
      if (this.model.has('data'))
        data = $.parseJSON(this.model.get('data'));
      else
        data = {'firstname': this.model.get('firstname'),
        'lastname': this.model.get('lastname')};

      var qHeader = new QuestionsHeaderView({model: data});
      this.$el.find('.questions-ph').append(qHeader.render().el);

      var hrbody = $.parseJSON(this.model.get('hrForm'));
      this.hrqs.reset(hrbody);
      var hrQsView = new QuestionsROView({
          collection: this.hrqs
      });
      this.$el.find('.questions-ph').append(hrQsView.render().el);

      this.qs.reset(body);
      var qsView = new QuestionsView({
          collection: this.qs
      });
      this.$el.find('.questions-ph').append(qsView.render().el);
      return this;
    },
    save: function(e) {
      this.model.errors = "";
      that = this;      
      this.qs.each(function(q) { q.isValid() });
      var hasErrors = _.some(this.qs.models, function(q) {
          return q.validationError;
      });
      if (!hasErrors) {
        this.model.set('body', JSON.stringify(that.qs) );
        this.model.save({}, {
          success: function(model, response) {    
            that.displaySucess();
          },
          error: function(model, response) {
            that.displayError();
          }
        });
      } else{
        that.displayError();
        var errors = this.qs
          .filter(function(q){return q.validationError})
          .map(function(q){return q.get('q')});
        this.model.errors = errors;
      }
    },
    displayError: function() {
      $('.notify').removeClass("notify-ok");
      $('.notify').addClass("notify-error");
      $('.notify').show();
      $('.notify-error').fadeOut(500);
    },
    displaySucess: function() {
      $('.notify').removeClass("notify-error");
      $('.notify').addClass("notify-ok");
      $('.notify').show();
      $('.notify-ok').fadeOut(500);
    }
  });

  ManagerView = EmployeeView.extend({
    template: _.template(managerT),
    name: "mgrForm"
  });

  HRView = Backbone.View.extend({
    template: _.template(hrT),
    render: function() {
      this.$el.html(this.template);
      rivets.bind(this.el, {
          t: this.model
      });
      return this;
    }
  });

  var view = Backbone.View.extend({        
    template: _.template(defaultT),
    HRtemplate: _.template(hrT),
    kind:"",
    initialize: function() {
        this.kind = this.model.get('kind');
    },
    render: function() {
      this.$el.html('');
      if (this.kind === "hr") {
        var mgrView = new HRView({
          model: this.model
        });
        this.$el.append(mgrView.render().el);

        // console.log(this.model);
        // this.$el.html(this.HRtemplate);
        // rivets.bind(this.el, {
        //     t: this.model
        // });
        // _.each(this.model.get('mgrForms'), function(form){
        //   var data = $.parseJSON(form.data);
        //   var body = $.parseJSON(form.body);
        //   var qs = new QuestionCollection()
        //   qs.reset(body);
        //   qs.each(function(i){i.set('hrview', true);});
        //   var mgrView = new QuestionsView({
        //       collection: qs,
        //       model: data
        //   });
        //   mgrView.render();
        //   this.$el.find('.mgrs-ph').append(mgrView.$el);
        // }, this);

        // var data = $.parseJSON(this.model.get('empForm').data);
        // var body = $.parseJSON(this.model.get('empForm').body);
        // var qs = new QuestionCollection()
        // qs.reset(body);
        // qs.each(function(i){i.set('hrview', true);});
        // var empView = new QuestionsView({
        //     collection: qs,
        //     model: data
        // });
        // empView.render();
        // this.$el.find('.emp-ph').append(empView.$el);
      }
      else if (this.kind === "mgr") {
        var mgrView = new ManagerView({
          model: this.model
        });
        this.$el.append(mgrView.render().el);
      } else { //default - employee
        var empView = new EmployeeView({
          model: this.model
        });
        this.$el.append(empView.render().el);
      }
      return this;
    }
  });

  return view
});