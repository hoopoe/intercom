define([
    'i18n',
    'app/util',
    'text!profileTemplate',
    'app/profile/background/backgroundsC',
    'app/profile/background/backgroundsV',
    'app/profile/background/addUpdateV',
    'app/profile/position/positionsC',
    'app/profile/position/positionsV',
    'app/profile/position/addUpdateV',
], function(i18n, util, profileT,
    BackgroundCollection, BackgroundsView, BackgroundAddUpdateView,
    PositionCollection, PositionsView, PositionAddUpdateView) {
    var i18NOptions = {
        detectFromHeaders: false,
        lng: document.documentElement.lang || window.navigator.userLanguage || window.navigator.language || 'en-US',
        fallbackLang: 'en',
        ns: 'app',
        resGetPath: 'plugin_assets/tercomin/javascripts/app/locales/__lng__/__ns__.json',
        fallbackLng: false
    };
    var _tr = null;
    i18n.init(i18NOptions, function(tr) {
        _tr = tr;
    });
    Backbone.profileEvent = _.extend({}, Backbone.Events);

    var view = Backbone.View.extend({
        name: "mypage",
        events: {
            'mousedown .editable': 'editableClick',
            'change .avatar-control-save': 'profileImgSave',

            'click .add-position': 'addPosition',
            'click .remove-position': 'removePosition',
            'click .edit-position': 'editPosition',

            'click .add-background': 'addBackground',
            'click .remove-background': 'removeBackground',
            'click .edit-background': 'editBackground',

            'click .edit-emp-item a': 'editEmpItem',
            'click .emp-item-cancel': 'cancelEmpItem',
            'click .emp-item-save': 'saveEmpItem',
            'change #english_lvl': 'selectLanguage',
        },
        initialize: function() {
            Backbone.profileEvent.on('avatarUpdated', this.onAvatarUpdated, this);

            Backbone.profileEvent.on('positionSubmit', this.onPositionSubmit, this);
            Backbone.profileEvent.on('cancelPositionForm', this.onCancelPositionForm, this);
            Backbone.profileEvent.on('renderPositions', this.onRenderPositions, this);

            Backbone.profileEvent.on('backgroundSubmit', this.onBackgroundSubmit, this);
            Backbone.profileEvent.on('renderBackgrounds', this.onRenderBackgrounds, this);
            Backbone.profileEvent.on('editItemCompleted', this.onEditItemCompleted, this);
            _.bindAll(this, 'save');
            this.model.bind('save', this.save);
        },
        render: function() {
            var template = _.template(profileT);
            this.$el.html('');
            this.$el.html(template({
                l: _tr
            }));            
            rivets.bind(this.el, {
                user_p: this.model.get('data')
            });
            this.onRenderPositions();
            this.onRenderBackgrounds();
            return this;
        },
        onCancelPositionForm: function(data) {
            Backbone.profileEvent.trigger('renderPositions');
        },
        addPosition: function(e) {
            var position = new Backbone.Model({
                companyName: '',
                from: moment().format("MMM YYYY"),
                to: moment().format("MMM YYYY"),
                project: "",
                position: "",
                resp: "",
                techSummary: ""
            });
            if (this.currentAddOrUpdatePositionView !== undefined) {
                this.currentAddOrUpdatePositionView.cancel();
            }
            this.currentAddOrUpdatePositionView = new PositionAddUpdateView({
                model: position
            }).render();
            $('.positions-ph').prepend(this.currentAddOrUpdatePositionView.el);
        },
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
                this.currentAddOrUpdatePositionView = new PositionAddUpdateView({
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
                    Backbone.profileEvent.trigger('renderPositions');
                },
                error: function(model, response) {
                    console.log("save: failed");
                }
            });
        },
        onPositionSubmit: function(positionModel) {
            var positions = this.model.get("positions");
            if (positionModel.id && positions.get(positionModel.id) !== undefined) { //update                
                positions.set(positionModel, {
                    remove: false
                });
            } else {
                var hash = util.getHash();
                positionModel.set('id', hash);
                positions.add(positionModel);
            }

            this.model.set('profile', {
                'positions': JSON.stringify(positions)
            });

            this.model.save({}, {
                success: function(model, response) {
                    Backbone.profileEvent.trigger('renderPositions');
                },
                error: function(model, response) {
                    console.log("save: failed");
                }
            });
        },
        onRenderPositions: function() {
            if (this.currentPositionsView !== undefined)
                this.currentPositionsView.remove();

            if (this.currentAddOrUpdatePositionView !== undefined)
                this.currentAddOrUpdatePositionView.remove();

            if (this.model.get('positions') === undefined)
                this.model.set('positions', new PositionCollection());

            this.currentPositionsView = new PositionsView({
                collection: this.model.get('positions')
            });
            this.currentPositionsView.setEditable(this.model.get('editable'));

            this.$el.find('.positions-ph').append(this.currentPositionsView.$el);
            this.currentPositionsView.render();
        },
        addBackground: function(e) {
            var background = new Backbone.Model({
                from: moment().format("MMM YYYY"),
                to: moment().format("MMM YYYY"),
                name: ''
            });
            if (this.currentAddOrUpdateBackgroundView !== undefined) {
                this.currentAddOrUpdateBackgroundView.cancel();
            }
            this.currentAddOrUpdateBackgroundView = new BackgroundAddUpdateView({
                model: background
            }).render();
            $('.backgrounds-ph').prepend(this.currentAddOrUpdateBackgroundView.el);
        },
        editBackground: function(e) {
            e.preventDefault();
            var selectedBackgroundEl = $(e.currentTarget).parent().parent();
            var id = $(e.currentTarget).data("id");
            var backgrounds = this.model.get("backgrounds");
            var background = backgrounds.get(id);
            if (background !== undefined) {
                if (this.currentAddOrUpdateBackgroundView !== undefined) {
                    this.currentAddOrUpdateBackgroundView.cancel();
                }
                this.currentAddOrUpdateBackgroundView = new BackgroundAddUpdateView({
                    model: background
                }).render();
                selectedBackgroundEl.append(this.currentAddOrUpdateBackgroundView.el);
            }
        },
        removeBackground: function(e) {
            e.preventDefault();
            var id = $(e.currentTarget).data("id");
            var backgrounds = this.model.get("backgrounds");
            backgrounds.remove(id);
            this.model.set('profile', {
                'backgrounds': JSON.stringify(backgrounds)
            });
            this.model.save({}, {
                success: function(model, response) {
                    Backbone.profileEvent.trigger('renderBackgrounds');
                },
                error: function(model, response) {
                    console.log("save backgrounds failed");
                }
            });
        },
        onBackgroundSubmit: function(backgroundModel) {
            var backgrounds = this.model.get("backgrounds");
            if (backgroundModel.id && backgrounds.get(backgroundModel.id) !== undefined) { //update                
                backgrounds.set(backgroundModel, {
                    remove: false
                });
            } else {
                var hash = util.getHash();
                backgroundModel.set('id', hash);
                backgrounds.add(backgroundModel);
            }
            this.model.set('profile', {
                'backgrounds': JSON.stringify(backgrounds)
            });
            this.model.save({}, {
                success: function(model, response) {
                    Backbone.profileEvent.trigger('renderBackgrounds');
                },
                error: function(model, response) {
                    console.log("save backgrounds failed");
                }
            });
        },
        onRenderBackgrounds: function() {
            if (this.currentBackgroundsView !== undefined)
                this.currentBackgroundsView.remove();

            if (this.currentAddOrUpdateBackgroundView !== undefined)
                this.currentAddOrUpdateBackgroundView.remove();

            if (this.model.get('backgrounds') === undefined)
                this.model.set('backgrounds', new BackgroundCollection());
            this.currentBackgroundsView = new BackgroundsView({
                collection: this.model.get('backgrounds')
            });
            this.currentBackgroundsView.setEditable(this.model.get('editable'));

            this.$el.find('.backgrounds-ph').append(this.currentBackgroundsView.$el);
            this.currentBackgroundsView.render();
        },
        editableClick: function(e) {
            etch.editableInit.call(this, e);
        },
        selectLanguage: function(e) {
            var lvl = $('#english_lvl').val();
            var prop = e.currentTarget.getAttribute('value');
            this.model.get('data').set('edit_prop', prop);
            var data = this.model.get('data');
            data.set(prop, lvl);
            this.save();
        },
        editEmpItem: function(e) {
            var prop = e.currentTarget.getAttribute('value');
            var dataModel = this.model.get('data').set('edit_prop', prop);
            if (prop === 'birthday') {
                var that = this; //todo: refactor tt
                $("#birthdayPicker").datepicker({
                    changeYear: true,
                    changeMonth: true,
                    dateFormat: 'd MM',
                    yearRange: '1925:' + ((new Date).getFullYear() - 14),
                    onClose: function(dateText) {
                        // console.log(dateText);
                        var data = that.model.get('data');
                        data.set('birthday', dateText);
                        that.save();
                    },
                    beforeShow: function(input, inst) {
                        $('#ui-datepicker-div').addClass("datepicker-color-year");
                    }
                });
                $("#birthdayPicker").focus(function() {
                    $(".ui-datepicker-year").hide();
                    $("#ui-datepicker-div").position({
                        my: "center top",
                        at: "center bottom",
                        of: $(this)
                    });
                });
            }
            if (prop === 'employmentDate') {
                var that = this;
                $("#employmentDatePicker").datepicker({
                    dateFormat: 'M yy',
                    changeMonth: true,
                    changeYear: true,
                    showButtonPanel: false,
                    yearRange: '1991:' + (new Date).getFullYear(),
                    onClose: function(dateText, inst) {                        
                        var t = new Date(inst.selectedYear, inst.selectedMonth, 1);
                        var dateSelected = moment(t);
                        var data = that.model.get('data');
                        data.set('employmentDate', dateSelected.format("MMM YYYY"));
                        that.save();
                    },
                    beforeShow: function(input, inst) {
                        $('#ui-datepicker-div').addClass("datepicker-color-year");
                        var dateText = $(this).val();
                        var date = moment(dateText, ["MMMM YYYY", "MMM YYYY"]);
                        var year = date.year();
                        var month = date.month();
                        $(this).datepicker('option', 'defaultDate', new Date(year, month, 1));
                        $(this).datepicker('setDate', new Date(year, month, 1));
                    }
                });
                $("#employmentDatePicker").focus(function() {
                    $(".ui-datepicker-calendar").hide();
                    $("#ui-datepicker-div").position({
                        my: "center top",
                        at: "center bottom",
                        of: $(this)
                    });
                });
            }
        },
        cancelEmpItem: function(e) {
            var prop = e.currentTarget.getAttribute('value');
            var dataModel = this.model.get('data').set('edit_prop', prop);
            dataModel.set(prop, this.model.getData(prop));
            this.model.get('data').set('edit_prop', "None");
            dataModel.isValid(); //remove validataion error
        },
        saveEmpItem: function(e) {
            var prop = e.currentTarget.getAttribute('value');
            var dataModel = this.model.get('data').set('edit_prop', prop);
            if (prop === 'summary' || prop === 'skills' || prop == 'coureses' || prop === 'extra_languages') {
                var tmp = $('.profile-' + prop);
                dataModel.set(prop, tmp.html());
            }
            if (!dataModel.isValid()) {
                var prop = this.model.get('data').get('edit_prop');
                var ntf = $('.' + prop + '-notify-fail');
                ntf.animate({
                    opacity: 1
                });
                ntf.fadeTo(1000, 0);
            } else {
                this.save();
            }
        },
        onEditItemCompleted: function() {
            var prop = this.model.get('data').get('edit_prop');
            var ntf = $('.' + prop + '-notify-ok');
            ntf.animate({
                opacity: 1
            });
            ntf.fadeTo(1000, 0);
            this.model.get('data').set('edit_prop', "None");
        },
        profileImgSave: function(e) {
            var file = _.first(e.currentTarget.files)
            var blob = file;
            var url = '/tercomin/api/v1/user_profile?id=' + this.model.get('profile').id +
                '&name=' + file.name;

            $.ajax(url, {
                type: 'POST',
                contentType: 'application/octet-stream',
                beforeSend: function(jqXhr, settings) {
                    jqXhr.setRequestHeader('Accept', 'application/json');
                    settings.data = blob;
                },
                xhr: function() {
                    var xhr = $.ajaxSettings.xhr();
                    return xhr;
                },
                data: blob,
                cache: false,
                processData: false,
                success: function(data, text) {
                    Backbone.profileEvent.trigger('avatarUpdated', data);
                    $.notify({
                        title: "Success: ",
                        message: "Avatar saved"
                    }, {
                        type: "success"                        
                    });
                },
                error: function(request, status, error) {
                    $.notify({
                        title: "Error: ",
                        message: request.responseText
                    }, {
                        type: "danger"
                    });
                }
            });

        },
        onAvatarUpdated: function(e) {
            //image caching workaround
            var d = new Date();
            var data = this.model.get("data");            
            data.set('avatar_url', e.url + "?" +d.getTime());            
        },
        save: function() {
            if (!this.model.isValid()) {
                var prop = this.model.get('data').get('edit_prop');
                var ntf = $('.' + prop + '-notify-fail');
                ntf.animate({
                    opacity: 1
                });
                ntf.fadeTo(1000, 0);
                this.model.get('data').set('edit_prop', "None");
            } else {
                this.model.save({}, {
                    success: function(model, response) {
                        Backbone.profileEvent.trigger('editItemCompleted', this.model);
                    },
                    error: function(model, response) {},
                });
            }
        }
    });
    return view;
});