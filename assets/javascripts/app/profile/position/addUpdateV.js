define([
    'text!app/profile/position/addUpdate.html'
], function(T) {
    var view = Backbone.View.extend({
        className: 'position-container',
        template: _.template(T),
        events: {
            'click .add-position-cancel': 'cancel',
            'click .add-position-submit': 'submit',
            'mouseover .pos-from': 'createFromPicker',
            'mouseover .pos-to': 'createToPicker',
        },
        createFromPicker: function(e) {
            var that = this;
            $(e.currentTarget).datepicker({
                dateFormat: 'M yy',
                changeMonth: true,
                changeYear: true,
                showButtonPanel: false,
                yearRange: '1930:' + (new Date).getFullYear(),
                onChangeMonthYear: function(year, month, inst) {
                    var t = new Date(inst.selectedYear, inst.selectedMonth, 1);
                    var date = moment(t);                                    
                    that.model.set('from', date.format("MMM YYYY"));
                },
                beforeShow: function(input, inst) {
                    $('#ui-datepicker-div').addClass("datepicker-color-year");
                    var dateText = $(this).val();
                    var date = moment(dateText, ["MMMM YYYY", "MMM YYYY"]);
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
        createToPicker: function(e) {
            var that = this;
            $(e.currentTarget).datepicker({
                dateFormat: 'M yy',
                changeMonth: true,
                changeYear: true,
                showButtonPanel: false,
                yearRange: '1930:' + (new Date).getFullYear(),
                onChangeMonthYear: function(year, month, inst) {
                    var t = new Date(inst.selectedYear, inst.selectedMonth, 1);
                    var date = moment(t);
                    that.model.set('to', date.format("MMM YYYY"));
                },
                beforeShow: function(input, inst) {
                    $('#ui-datepicker-div').addClass("datepicker-color-year");
                    var dateText = $(this).val();
                    var date = moment(dateText, ["MMMM YYYY", "MMM YYYY"]);
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
                position: this.model
            });
            return this;
        },
        cancel: function(e) {
            this.remove();
        },
        submit: function(e) {
            Backbone.profileEvent.trigger('positionSubmit', this.model);
        }
    })
    return view;
});