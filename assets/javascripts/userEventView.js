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
        initialize: function() {},
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            rivets.bind(this.el, {
                ue: this.model
            });         
            this.onRenderQuestions();   
            return this;
        },
        onRenderQuestions:function(){
            var questions = $.parseJSON(this.model.get('body'));
            console.log(questions);
            this.qs.reset(questions);

            if (this.currentQuestionsView !== undefined)
                this.currentQuestionsView.remove();

             this.currentQuestionsView = new QuestionsView({
                collection: this.qs
            });            
            this.$el.find('.questions-ph').append(this.currentQuestionsView.$el);
            this.currentQuestionsView.render();
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