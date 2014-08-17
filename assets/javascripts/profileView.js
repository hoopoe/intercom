var app = app || {};

$(function() {

    ProfileView = Backbone.View.extend({
        name: "mypage",

        template: _.template($("#profile-template").html()),

        editedEl: {},

        isEditable: false,

        events: {
            'mousedown .editable': 'editableClick',
            'dragover .profile-div': 'dragoverHandler',
            'drop .profile-div': 'dropHandler',
            'click .profile-img-save': 'profileImgSave'
        },

        initialize: function() {
            _.bindAll(this, 'save');
            this.model.bind('save', this.save);
            if (this.model.get('editable'))
                this.isEditable = true;
        },


        render: function() {
            this.$el.html('');
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        renderFinished: function() {
            _.each($('.profile-data'), function(i) {
                $(i).attr('size', $(i).val().length + 5);
                if (!this.isEditable){
                    $(i).attr('disabled', true); 
                }
            },this);
        },

        editableClick: function(e) {            
            if (this.isEditable) {
                this.editedEl = e.target;
                etch.editableInit.call(this, e);
            }
        },    

        dragoverHandler: function(e) {
            e.preventDefault();            
        },

        dropHandler: function(e) {
            e.originalEvent.stopPropagation();
            e.originalEvent.preventDefault();

            e.originalEvent.dataTransfer.dropEffect = 'copy';
            this.pictureFile = e.originalEvent.dataTransfer.files[0];
            // console.log(this.pictureFile);

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
            if ($(this.editedEl).is("input"))
                map[this.editedEl.getAttribute("data-prop")] = $(this.editedEl).val();
            else
                map[this.editedEl.getAttribute("data-prop")] = $(this.editedEl).html();
                
            this.model.set('profile', map);
            this.model.save();
        }
    });
});