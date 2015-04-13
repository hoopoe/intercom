define([
  'i18n',
  'text!app/userevent/hr.html',
  'text!app/userevent/questions.html',
  'text!app/userevent/questions_ro.html',
  'text!app/userevent/manager.html',
  'text!app/userevent/manager_ro.html',
  'text!app/userevent/employee.html',
  'text!app/userevent/employee_ro.html'
], function(i18n, hrT, questionsT, questions_ro_T,
  managerT, manager_ro_T, employeeT, employee_ro_T) {
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
        'lastname': this.model.get('lastname'),
        'created_on': this.model.get('created_on')};

      if (!data.employmentDate) {
        data['created_on'] = this.model.get('created_on');
      } else{
        data['created_on'] = data.employmentDate;
      }
      
      if ( this.model.has('peons') )
        data['peons'] = this.model.get('peons');

      var qHeader = new QuestionsHeaderView({model: data});
      this.$el.find('.header-ph').append(qHeader.render().el);

      var hrbody = $.parseJSON(this.model.get('hrForm'));
      this.hrqs.reset(hrbody);
      var hrQsView = new QuestionsROView({
          collection: this.hrqs
      });
      this.$el.find('.hr-ph').append(hrQsView.render().el);

      this.qs.reset(body);
      var qsView = new QuestionsView({
          collection: this.qs
      });
      this.$el.find('.general-ph').append(qsView.render().el);
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
            that.displaySuccess();
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
    displaySuccess: function() {
      $('.notify').removeClass("notify-error");
      $.notify({title: "Success: ", 
        message: "Employee's info is saved!"},
        {type: "success"
      });
    },
    displayError: function() {
      $('.notify').removeClass("notify-ok");
      $('.notify').addClass("notify-error");
      $('.notify').show();
      $('.notify-error').fadeOut(500);
      $.notify({title: "Error: ", 
        message: "Employee's info is not saved!"},
        {type: "danger"
      });
    }
  });

  EmployeeROView = Backbone.View.extend({
    template: _.template(employee_ro_T),
    qs: new QuestionCollection(),
    data: undefined,
    render: function() {
      this.$el.html(this.template);
      var body = $.parseJSON(this.model.body);
      if (this.model.data)
        data = $.parseJSON(this.model.data);
      else
        data = {'firstname': this.model.get('firstname'),
        'lastname': this.model.get('lastname')};
      if ( this.model.peons )
        data['peons'] = this.model.peons;
      
      var qHeader = new QuestionsHeaderView({model: data});
      this.$el.find('.emp-header-ph').append(qHeader.render().el);

      this.qs.reset(body);
      var qsView = new QuestionsROView({
          collection: this.qs
      });
      this.$el.find('.emp-ph').append(qsView.render().el);
      return this;
    }
  });

  ManagerROView = Backbone.View.extend({
    template: _.template(manager_ro_T),
    qs: new QuestionCollection(),
    data: undefined,
    render: function() {
      this.$el.html(this.template);
      var body = $.parseJSON(this.model.body);
      if (this.model.data)
        data = $.parseJSON(this.model.data);
      else
        data = {'firstname': this.model.get('firstname'),
        'lastname': this.model.get('lastname')};

      var qHeader = new QuestionsHeaderView({model: data});
      this.$el.find('.mgr-header-ph').append(qHeader.render().el);

      this.qs.reset(body);
      var qsView = new QuestionsROView({
          collection: this.qs
      });
      this.$el.find('.mgr-ph').append(qsView.render().el);
      return this;
    }
  });

  ManagerView = EmployeeView.extend({
    template: _.template(managerT),
    name: "mgrForm"
  });

  HRView = Backbone.View.extend({
    template: _.template(hrT),
    qs: new QuestionCollection(),
    events: {
      'click .save-ue': 'save'
    },
    render: function() {
      this.$el.html(this.template);
      rivets.bind(this.el, {
          t: this.model
      });
      
      if (this.model.get('empForm')) {
        var empForm = this.model.get('empForm')
        if ( this.model.has('peons') )
          empForm['peons'] = this.model.get('peons');
        var empView = new EmployeeROView({
          model: empForm
        });
        this.$el.find('.left-ph').append(empView.render().el);
      }

      _.each(this.model.get('mgrForms'), function(form) {
        var mgrView = new ManagerROView({
          model: form
        });
        this.$el.find('.right-ph').append(mgrView.render().el);
      }, this);

      var hrbody = $.parseJSON(this.model.get('hrForm'));
      this.qs.reset(hrbody);
      var hrQsView = new QuestionsView({
          collection: this.qs
      });
      this.$el.find('.hr-ph').append(hrQsView.render().el);
      return this;
    },
    save: function(e) {
      that = this;
      this.qs.each(function(q) { q.isValid() });
      var hasErrors = _.some(this.qs.models, function(q) {
          return q.validationError;
      });
      if (!hasErrors) {        
        this.model.set('body', JSON.stringify(this.qs) );
        this.model.save({}, {
          success: function(model, response) {    
            that.displaySuccess();
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
    displaySuccess: function() {
      $('.notify').removeClass("notify-error");
      $.notify({title: "Success: ", 
        message: "HR info is saved!"},
        {type: "success"
      });
    },
    displayError: function() {
      $('.notify').removeClass("notify-ok");
      $('.notify').addClass("notify-error");
      $('.notify').show();
      $('.notify-error').fadeOut(500);
      $.notify({title: "Error: ", 
        message: "HR info is not saved!"},
        {type: "danger"
      });
    }
  });

  var view = Backbone.View.extend({
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
      }
      else if (this.kind === "mgr") {
        var mgrView = new ManagerView({
          model: this.model
        });
        this.$el.append(mgrView.render().el);
      } else {
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