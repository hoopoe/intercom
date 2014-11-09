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
            return new QuestionView({model: q});
        },              
        render: function() {
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
            console.log(this.model);
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
        qs: new QuestionCollection(),
        events: {
            'click .ue-submit': 'submit',
            'click .ue-cancel': 'cancel'
        },
        initialize: function() {
            // Backbone.positionEvent.on('saveUE', this.onSaveUE, this);
        },
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            rivets.bind(this.el, {
                ue: this.model
            });         
            this.onRenderQuestions();   
            return this;
        },
        onRenderQuestions:function() {
            var kind = this.model.get('kind');
            var data = $.parseJSON(this.model.get('body'));
            if (this.currentForm !== undefined)
                    this.currentForm.remove();
            if (kind === "mgr") {
                console.log("manager");
                this.qs.reset(data);
                this.currentForm = new QuestionsView({
                    collection: this.qs
                });
                this.$el.find('.questions-ph').append(this.currentForm.$el);
                this.currentForm.render();
            } else if (kind === "self") {
                console.log("employee");
                this.qs.reset(data);
                 this.currentForm = new QuestionsView({
                    collection: this.qs
                });            
                this.$el.find('.questions-ph').append(this.currentForm.$el);
                this.currentForm.render();
            } else if (kind === "hr") {
                console.log("todo: hr view");
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
                    // Backbone.positionEvent.trigger('renderPositions');
                    console.log("save done");
                },
                error: function(model, response) {
                    console.log("save: failed");
                }
            });        
        }
    });
});