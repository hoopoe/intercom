var app = app || {};

$(function() {

	Question = Backbone.Model.extend({});
 	QuestionCollection = Backbone.Collection.extend({
        model: Question
    });

    QuestionView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#question-li-template').html()),
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            rivets.bind(this.el, {
                t: this.model
            });            
            return this;
        }
    });

    QualityQView = QuestionView.extend({
        template: _.template($('#qualityq-li-template').html())
    });

    HeaderQView = QuestionView.extend({
        template: _.template($('#headerq-li-template').html())
    });

    LoyaltyQView = QuestionView.extend({
        template: _.template($('#loyalityq-li-template').html())
    });

    RequiredQView = QuestionView.extend({
        template: _.template($('#personalq-li-template').html())
    });

    FreeFormQView = QuestionView.extend({
        template: _.template($('#freeformq-li-template').html())
    });

    SatisfactionQView = QuestionView.extend({
        template: _.template($('#satisfactionq-li-template').html())
    });

    EasyQView = QuestionView.extend({
        template: _.template($('#easyq-li-template').html())
    });

    BonusQView = QuestionView.extend({
        template: _.template($('#bonusq-li-template').html())
    });

    CorrQView = QuestionView.extend({
        template: _.template($('#corrq-li-template').html())
    });

    ActivityQView = QuestionView.extend({
        template: _.template($('#activityq-li-template').html())
    });

    QuestionsHeaderView = Backbone.View.extend({
        template: _.template($('#questions-header-template').html()),
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            // console.log(this.model);
            rivets.bind(this.el, {
                t: this.model
            });            
            return this;
        }
    });

    QuestionsView = Backbone.View.extend({
        tagName: 'ul',
        className: 'questions-view',  
        getView: function(q){
            if(q.has('qh')) 
                return new HeaderQView({model: q});
            if(q.has('qq')) 
                return new QualityQView({model: q});
            if(q.has('lq')) 
                return new LoyaltyQView({model: q});
            if(q.has('rq')) 
                return new RequiredQView({model: q});
            if(q.has('fq')) 
                return new FreeFormQView({model: q});
            if(q.has('sq')) 
                return new SatisfactionQView({model: q});
            if(q.has('bq')) 
                return new BonusQView({model: q});
            if(q.has('eq')) 
                return new EasyQView({model: q});
            if(q.has('cq')) 
                return new CorrQView({model: q});
            if(q.has('aq'))
                return new ActivityQView({model: q});
            return new QuestionView({model: q});
        },              
        render: function() {
            var qHeader = new QuestionsHeaderView({model: this.model});
            this.$el.append(qHeader.render().el);

            this.collection.each(function(q) {
                var qView = this.getView(q);
                this.$el.append(qView.render().el);
            }, this);            
            return this;
        }
    });

    EmployeeView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#mgr-emp-li-template').html()),
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            // console.log(this.model);
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

    app.UserEvent = Backbone.Model.extend({
        urlRoot: '/tercomin/api/v1/user_event'
    });

    app.UserEventView = Backbone.View.extend({        
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
                // console.log(this.model);
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
            this.model.set('body', JSON.stringify(that.qs) );            
            this.model.save({}, {
                success: function(model, response) {    
                    console.log("save done");
                },
                error: function(model, response) {
                    console.log("save: failed");
                }
            });        
        }
    });
});