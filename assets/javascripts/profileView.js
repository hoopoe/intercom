var app = app || {};

$(function() {

    ProfileView = Backbone.View.extend({

        template: _.template($("#profile-template").html()),

        events: {
            'mousedown .editable': 'editableClick',
            'dragover .profile-div': 'dragoverHandler',
            'drop .profile-div': 'dropHandler',
            'click .profile-img-save': 'profileImgSave'
        },

        initialize: function() {
            _.bindAll(this, 'save');
            this.model.bind('save', this.save);
        },

        render: function() {
            this.$el.html('');
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        // editableClick: function() {
        //     // console.log("tt");
        //     etch.editableInit;
        // },

        editableClick: etch.editableInit,

        dragoverHandler: function(e) {
            e.preventDefault();
            // console.log("drag over");
        },

        dropHandler: function(e) {
            e.originalEvent.stopPropagation();
            e.originalEvent.preventDefault();

            e.originalEvent.dataTransfer.dropEffect = 'copy';
            this.pictureFile = e.originalEvent.dataTransfer.files[0];

            // Read the image file from the local file system and display it in the img tag
            var reader = new FileReader();
            reader.onloadend = function() {
                app.Resample(this.result, 128, 128, photoResult);
            };

            reader.readAsDataURL(this.pictureFile);

            function photoResult(data) {
                $(".profile-div img").removeClass("no-profile-img");
                $('.profile-div img').attr('src', data).show();
                self.photoObj = data;
                $(".profile-img-save").removeClass("profile-img-save-hide");
            }
        },

        profileImgSave: function() {
            console.log("save image");
        },

        save: function() {
            var skills = this.$('.profile-skills').html();
            // console.log(skills);
            this.model.save({
                skills: skills
            });
        }
    });
});