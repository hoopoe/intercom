var app = app || {};

$(function() {

    Backbone.positionEvent = _.extend({}, Backbone.Events);

    ProfileView = Backbone.View.extend({
        name: "mypage",

        template: _.template($("#profile-template").html()),

        editedEl: {},

        isEditable: false,

        events: {
            'mousedown .editable': 'editableClick',
            'dragover .profile-div': 'dragoverHandler',
            'drop .profile-div': 'dropHandler',
            'click .profile-img-save': 'profileImgSave',
            'click .add-position': 'addPosition'
        },

        initialize: function() {
            Backbone.positionEvent.on('positionSubmit', this.onPositionSubmit, this);
            Backbone.positionEvent.on('cancelPositionForm', this.onCancelPositionForm, this);
            // Backbone.positionEvent.on('renderRequest', this.render, this);
            _.bindAll(this, 'save');
            this.model.bind('save', this.save);
            if (this.model.get('editable'))
                this.isEditable = true;
        },        
        render: function() {
            this.$el.html('')
            this.$el.html( this.template );
            // console.log(this.model.toJSON());

            // console.log(this.model);
            // rivets.bind(this.el, { t_profile: this.model.get('profile') } );
            rivets.bind(this.el, { user_p: this.model } );

            // this.$el.html(this.template(this.model.toJSON()));
            
            return this;
        },
        renderFinished: function() {
            _.each($('.profile-data'), function(i) {                
                if (!this.isEditable){
                    $(i).attr('disabled', true); 
                }
            },this);        

            var view = this; //todo: remove
            $( "#datepicker" ).datepicker({
             changeYear: false, 
             dateFormat: 'dd/mm', 
             onSelect: function(dateText) {                
                 if (view.isEditable) {
                    view.editedEl = this; //this -> input                    
                    view.save(); //read calendar data-prop                    
                }
              }
            });                
        },
        editableClick: function(e) {     
            if (this.isEditable) {                
                this.editedEl = e.currentTarget;
                etch.editableInit.call(this, e);
            }
        },   
        onPositionSubmit: function(data) {
            var hash = app.getHash();  
            data.set('guid', hash);
            var map = {};
            map[hash] = data.toJSON();            
            this.model.set('profile', {'positions': JSON.stringify(map)} );
            this.model.save({}, {
                success: function(model, response) {
                    location.reload();                    
                },
                error: function(model, response) {               
                    console.log("save: failed");                    
                }
            });
        },
        onCancelPositionForm: function(data) {
            $('.position-ph').remove();
        },
        
        addPosition: function(e) {           
            var PositionView = Backbone.View.extend({
                className: 'position-ph',
                template: _.template($('#position-template').html()),                            
                events: {                    
                    'click .add-position-cancel': 'cancel',
                    'click .add-position-submit': 'submit'
                },                
                render: function(){                    
                    this.$el.html('');
                    this.$el.html( this.template );                    
                    rivets.bind(this.el, { position: this.model } )
                    return this;
                },
                cancel: function(e) {                    
                    Backbone.positionEvent.trigger('cancelPositionForm', this.model);
                },
                submit: function(e) {                                                        
                    Backbone.positionEvent.trigger('positionSubmit', this.model);
                }              
            });            
            
            var position = new Backbone.Model({
                companyName: 'Joe',
                from: new Date(), 
                to: new Date(),
                project: "project",
                position: "position",
                resp: "resp",
                techSummary: "techSummary"
            });
            var form = new PositionView({model: position}).render();            
            $('.positions-ph').append(form.el);        
        },

        dragoverHandler: function(e) {
            e.preventDefault();            
        },

        dropHandler: function(e) {
            e.originalEvent.stopPropagation();
            e.originalEvent.preventDefault();

            e.originalEvent.dataTransfer.dropEffect = 'copy';
            this.pictureFile = e.originalEvent.dataTransfer.files[0];            

            // Read the image file from the local file system and display it in the img tag
            var reader = new FileReader();
            reader.onloadend = function() {
                app.Resample(this.result, 290, 330, photoResult);
            };

            reader.readAsDataURL(this.pictureFile);

            function photoResult(data) {
                $('.profile-div img').removeClass("no-profile-img");
                $('.profile-div img').attr('src', data).show();
                $('.profile-img-save').removeClass("profile-img-save-hide");
            }
        },

        profileImgSave: function() {
            var img = $('.profile-div img').attr('src');
            this.model.save({
                avatar: img
            }, {
                success: function(model, response) {
                    $('.profile-img-save').addClass("profile-img-save-hide");
                }
            });
        },

        save: function() {            
            var map = {};                       
            var prop = this.editedEl.getAttribute("data-prop");

            var notifyOk = $(this.editedEl).siblings().first();
            var notifyFail = $(this.editedEl).siblings().last();
            
            if ($(this.editedEl).is("input"))
                map[prop] = $(this.editedEl).val();            
            else
                map[prop] = $(this.editedEl).html();
            
            this.model.set('profile', {'data': JSON.stringify(map) });
            if (!this.model.isValid()) {                
                $('div.etch-editor-panel').remove();
                notifyFail.animate({ opacity: 1 }); 
                notifyFail.attr('title', this.model.validationError);                
            }        

            this.model.save({},{
                success: function(model, response) {                                                                        
                    notifyFail.animate({ opacity: 0 });
                    notifyOk.animate({ opacity: 1 });
                    notifyOk.fadeTo( 1000, 0 );                    
                    $('div.etch-editor-panel').remove();                                      
                },
                error: function(model, response) {                           
                    $('div.etch-editor-panel').remove();
                },
            });
        }
    });
});