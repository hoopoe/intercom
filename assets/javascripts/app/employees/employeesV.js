define([
	'app/employees/employeeV',
], function(EmployeeView) {
	var view = Backbone.View.extend({
        name: "employers",
        initialize: function() {
            this.$el.html('');
            this.$el.append("<div class='employer-list'> </div>");
            this.listenTo(this.collection, 'add', this.add);
        },
        add: function(item) {
            var view = new EmployeeView({
                model: item
            });
            this.$(".employer-list").append(view.render().el);
        },
        initScroll: function(extraParams) {
            this.infiniScroll = new Backbone.InfiniScroll(this.collection, {
                success: this.appendRender,
                includePage: true,
                pageSizeParam: "limit",
                extraParams: extraParams
            });
        },
        render: function() {
            return this;
        },
        onClose: function() {
            this.infiniScroll.destroy();
        }
    });
    return view;
});
