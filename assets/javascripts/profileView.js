var app = app || {};

$(function() {

    Backbone.positionEvent = _.extend({}, Backbone.Events);

    ProfileView = Backbone.View.extend({
        name: "mypage",

        template: _.template($("#profile-template").html()),

        // editedEl: {},

        isEditable: false, //todo: remove

        events: {
            'mousedown .editable': 'editableClick',
            'dragover .profile-div': 'dragoverHandler',
            'drop .profile-div': 'dropHandler',
            'click .profile-img-save': 'profileImgSave',
            'click .add-position': 'addPosition',
            'click .remove-position': 'removePosition',
            'click .edit-position': 'editPosition',
            'click .edit-emp-item a': 'editEmpItem',
            'click .emp-item-cancel': 'cancelEmpItem',
            'click .emp-item-save': 'saveEmpItem',
            'change #english_lvl': 'selectLanguage',
        },

        initialize: function() {
            app.currentProfile = this.model; //todo: remove            
            Backbone.positionEvent.on('positionSubmit', this.onPositionSubmit, this);
            Backbone.positionEvent.on('cancelPositionForm', this.onCancelPositionForm, this);
            Backbone.positionEvent.on('renderPositions', this.renderPositions, this);
            Backbone.positionEvent.on('editItemCompleted', this.onEditItemCompleted, this);
            _.bindAll(this, 'save');
            this.model.bind('save', this.save);
            if (this.model.get('editable'))
                this.isEditable = true;
        },
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);            
            rivets.bind(this.el, {
                user_p: this.model.get('data')
            });
            this.renderPositions();
            return this;
        },
        renderPositions: function() {
            if (this.currentPositionsView !== undefined)
                this.currentPositionsView.remove();

            if (this.currentAddOrUpdatePositionView !== undefined)
                this.currentAddOrUpdatePositionView.remove();

            if (this.model.get('positions') === undefined)
                this.model.set('positions', new app.PositionCollection());

            this.currentPositionsView = new app.PositionsView({
                collection: this.model.get('positions')                
            });
            this.currentPositionsView.setEditable(this.model.get('editable'));

            this.$el.find('.positions-ph').append(this.currentPositionsView.$el);
            this.currentPositionsView.render();
        },
        renderFinished: function() {
            _.each($('.profile-data'), function(i) {
                if (!this.isEditable) {
                    $(i).attr('disabled', true);
                }
            }, this);            
        },
        editableClick: function(e) {
            // if (this.isEditable) {
            //     this.editedEl = e.currentTarget;
                etch.editableInit.call(this, e);
            // }
        },
        selectLanguage: function(e) {
            var lvl = $('#english_lvl').val();
            var prop = e.currentTarget.getAttribute('value');
            this.model.get('data').set('edit_prop', prop);
            var data = this.model.get('data');
            data.set(prop, lvl);
            this.save();

            // console.log(lvl);            
            // console.log(prop);
        },
        onPositionSubmit: function(positionModel) {
            var positions = this.model.get("positions");
            if (positionModel.id && positions.get(positionModel.id) !== undefined) { //update                
                positions.set(positionModel, {
                    remove: false
                });
            } else {
                var hash = app.getHash();
                positionModel.set('id', hash);
                positions.add(positionModel);
            }
            
            this.model.set('profile', {
                'positions': JSON.stringify(positions)
            });
                        
            this.model.save({},{
                success: function(model, response) {                    
                    Backbone.positionEvent.trigger('renderPositions');
                },
                error: function(model, response) {
                    console.log("save: failed");
                }
            });
        },

        onCancelPositionForm: function(data) {
            Backbone.positionEvent.trigger('renderPositions');
        },

        addPosition: function(e) {
            var position = new Backbone.Model({
                companyName: '',
                from: moment().format("MM/DD/YYYY"),
                to: moment().format("MM/DD/YYYY"),
                project: "",
                position: "",
                resp: "",
                techSummary: ""
            });
            if (this.currentAddOrUpdatePositionView !== undefined) {
                this.currentAddOrUpdatePositionView.cancel();
            }
            this.currentAddOrUpdatePositionView = new app.AddOrUpdatePositionView({
                model: position
            }).render();            
            $('.positions-ph').prepend(this.currentAddOrUpdatePositionView.el);
        },

        editEmpItem: function(e) {
            var prop = e.currentTarget.getAttribute('value');
            var dataModel = this.model.get('data').set('edit_prop', prop);           
            if (prop === 'birthday')
            {
                var that = this; //todo: remove
                $( "#birthdayPicker" ).datepicker({
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
            dataModel.isValid();//remove validataion error
        },
        saveEmpItem: function(e) {            
            var prop = e.currentTarget.getAttribute('value');
            var dataModel = this.model.get('data').set('edit_prop', prop);
            if (prop === 'summary' || prop === 'skills'
                || prop == 'coureses' || prop === 'extra_languages') {
                var tmp = $('.profile-' + prop);
                dataModel.set(prop, tmp.html());                
            } 
            if (!dataModel.isValid()) {
                var prop = this.model.get('data').get('edit_prop');            
                var ntf = $('.' + prop + '-notify-fail');            
                ntf.animate({ opacity: 1 });
                ntf.fadeTo(1000, 0);            
                // this.model.get('data').set('edit_prop', "None");
            } else {
                this.save();
            }
        },
        onEditItemCompleted: function() {
            var prop = this.model.get('data').get('edit_prop');            
            var ntf = $('.' + prop + '-notify-ok');            
            ntf.animate({ opacity: 1 });
            ntf.fadeTo(1000, 0);            
            this.model.get('data').set('edit_prop', "None");
        },

        // onEditItemFailed: function() {
        //     var prop = this.model.get('data').get('edit_prop');            
        //     var ntf = $('.' + prop + '-notify-fail');            
        //     ntf.animate({ opacity: 1 });
        //     ntf.fadeTo(1000, 0);            
        //     this.model.get('data').set('edit_prop', "None");
        // },

        editPosition: function(e) {
            e.preventDefault();
            var selectedPositionEl = $(e.currentTarget).parent().parent();
            var id = $(e.currentTarget).data("id");
            var positions = this.model.get("positions");
            var position = positions.get(id);
            if (position !== undefined) {
                if (this.currentAddOrUpdatePositionView !== undefined) {
                    this.currentAddOrUpdatePositionView.cancel();
                }
                this.currentAddOrUpdatePositionView = new app.AddOrUpdatePositionView({
                    model: position
                }).render();
                selectedPositionEl.append(this.currentAddOrUpdatePositionView.el);
            }
        },
        removePosition: function(e) {
            e.preventDefault();
            var id = $(e.currentTarget).data("id");
            var positions = this.model.get("positions");
            positions.remove(id);
            this.model.set('profile', {
                'positions': JSON.stringify(positions)
            });
            this.model.save({}, {
                success: function(model, response) {
                    Backbone.positionEvent.trigger('renderPositions');
                },
                error: function(model, response) {
                    console.log("save: failed");
                }
            });
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
            // console.log(this.model.get('data'));

            // var data = $.parseJSON(this.model.get("profile").data);
            // var prop = this.editedEl.getAttribute("data-prop");

            // var notifyOk = $(this.editedEl).siblings().first();
            // var notifyFail = $(this.editedEl).siblings().last();

            // if ($(this.editedEl).is("input"))
            //     data[prop] = $(this.editedEl).val();
            // else
            //     data[prop] = $(this.editedEl).html();

            // this.model.set('profile', {
            //     'data': JSON.stringify(data)
            // });
            if (!this.model.isValid()) {
                console.log("model is not valid");
                var prop = this.model.get('data').get('edit_prop');            
                var ntf = $('.' + prop + '-notify-fail');            
                ntf.animate({ opacity: 1 });
                ntf.fadeTo(1000, 0);            
                this.model.get('data').set('edit_prop', "None");
                // $('div.etch-editor-panel').remove();
                // notifyFail.animate({
                //     opacity: 1
                // });
                // notifyFail.attr('title', this.model.validationError);
            } else {
                this.model.save({}, {
                    success: function(model, response) {                    
                        // notifyFail.animate({
                        //     opacity: 0
                        // });
                        // notifyOk.animate({
                        //     opacity: 1
                        // });
                        // notifyOk.fadeTo(1000, 0);
                        // $('div.etch-editor-panel').remove();
                        Backbone.positionEvent.trigger('editItemCompleted', this.model);
                    },
                    error: function(model, response) {
                        // Backbone.positionEvent.trigger('editItemFailed', this.model);
                        // $('div.etch-editor-panel').remove();
                    },
                });
            }
        }
    });
});