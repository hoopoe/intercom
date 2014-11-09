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

    QuestionsView = Backbone.View.extend({
        tagName: 'ul',
        className: 'questions-view',                
        render: function() {
            this.collection.each(function(q) {                
                var qView = new QuestionView({
                    model: q                    
                });
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
        kind: "self",
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
            this.kind = this.model.get('kind');
            var data = $.parseJSON(this.model.get('body'));
            if (this.currentForm !== undefined)
                    this.currentForm.remove();
            if ( this.kind === "mgr") {
                console.log("manager");
                this.qs.reset(data);
                this.currentForm = new QuestionsView({
                    collection: this.qs
                });
                this.$el.find('.questions-ph').append(this.currentForm.$el);
                this.currentForm.render();
            }else if (this.kind === "self") {
                console.log("employee");
                this.qs.reset(data);
                 this.currentForm = new QuestionsView({
                    collection: this.qs
                });            
                this.$el.find('.questions-ph').append(this.currentForm.$el);
                this.currentForm.render();
            }           
        },
        cancel: function(e) {            
            this.remove();//todo: redirect
        },        
        submit: function(e) {                             
            // this.currentForm.save();
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