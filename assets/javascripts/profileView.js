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
            if (this.model.get('user').editable)
                this.isEditable = true;
        },


        render: function() {
            this.$el.html('');
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        editableClick: function(e) {
            // console.log(this.isEditable);
            if (this.isEditable) {
                this.editedEl = e.target;
                etch.editableInit.call(this, e);
            }
        },

        // editableClick: etch.editableInit,

        dragoverHandler: function(e) {
            e.preventDefault();
            // console.log("drag over");
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
            var map = this.model.get('user');
            if (this.editedEl.getAttribute("data-prop") === "skills")
                map[this.editedEl.getAttribute("data-prop")] = $(this.editedEl).html();
            else
                map[this.editedEl.getAttribute("data-prop")] = $(this.editedEl).text();
            this.model.set('user', map);
            this.model.save();
        }
    });
});