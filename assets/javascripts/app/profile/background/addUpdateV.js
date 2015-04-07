define([
    'text!app/profile/background/addUpdate.html'
], function(BackT) {
    var view = Backbone.View.extend({
        className: 'background-container',
        template: _.template(BackT),
        events: {
            'click .add-background-cancel': 'cancel',
            'click .add-background-submit': 'submit',
            'mouseover .background-from': 'createFromBackgroundPicker',
            'mouseover .background-to': 'createToBackgroundPicker',
        },
        createFromBackgroundPicker: function(e) {
            var that = this;
            $(e.currentTarget).datepicker({
                dateFormat: 'M yy',
                changeMonth: true,
                changeYear: true,
                showButtonPanel: false,
                yearRange: '1930:' + (new Date).getFullYear(),
                onChangeMonthYear: function(year, month, inst) {
                    var date = moment(year + "-" + month + "-01");
                    that.model.set('from', date.format("MMM YYYY"));
                },
                beforeShow: function(input, inst) {
                    $('#ui-datepicker-div').addClass("datepicker-color-year");
                    var dateText = $(this).val();
                    var date = moment(dateText);
                    if (date.isValid()) {
                        var year = date.year();
                        var month = date.month();
                        $(this).datepicker('option', 'defaultDate', new Date(year, month, 1));
                        $(this).datepicker('setDate', new Date(year, month, 1));
                    }
                }
            });
            $(e.currentTarget).focus(function() {
                $(".ui-datepicker-calendar").hide();
                $("#ui-datepicker-div").position({
                    my: "center top",
                    at: "center bottom",
                    of: $(this)
                });
            });
        },
        createToBackgroundPicker: function(e) {
            var that = this;
            $(e.currentTarget).datepicker({
                dateFormat: 'M yy',
                changeMonth: true,
                changeYear: true,
                showButtonPanel: false,
                yearRange: '1930:' + (new Date).getFullYear(),
                onChangeMonthYear: function(year, month, inst) {
                    var date = moment(year + "-" + month + "-01");
                    that.model.set('to', date.format("MMM YYYY"));
                },
                beforeShow: function(input, inst) {
                    $('#ui-datepicker-div').addClass("datepicker-color-year");
                    var dateText = $(this).val();
                    var date = moment(dateText);
                    if (date.isValid()) {
                        var year = date.year();
                        var month = date.month();
                        $(this).datepicker('option', 'defaultDate', new Date(year, month, 1));
                        $(this).datepicker('setDate', new Date(year, month, 1));
                    }
                }
            });
            $(e.currentTarget).focus(function() {
                $(".ui-datepicker-calendar").hide();
                $("#ui-datepicker-div").position({
                    my: "center top",
                    at: "center bottom",
                    of: $(this)
                });
            });
        },
        render: function() {
            this.$el.html('');
            this.$el.html(this.template);
            rivets.bind(this.el, {
                background: this.model
            });
            return this;
        },
        cancel: function(e) {
            this.remove();
        },
        submit: function(e) {
            Backbone.profileEvent.trigger('backgroundSubmit', this.model);
        }
    });
    return view
});