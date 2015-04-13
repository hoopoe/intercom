define([
    'app/profile/background/backgroundV'
], function(BackgroundView) {
    var view = Backbone.View.extend({
        tagName: 'ul',
        className: 'backgrounds-view',
        editable: false,
        setEditable: function(e) {
            this.editable = e;
        },
        render: function() {
            this.collection.comparator = function(a, b) {
                var left = moment(a.get("to"), ["MMMM YYYY", "MMM YYYY"]);
                var right = moment(b.get("to"), ["MMMM YYYY", "MMM YYYY"]);
                if (left.isValid() && right.isValid) {
                    if (left > right) {
                        return -1;
                    }
                    if (right > left) {
                        return 1;
                    }
                }
                return 0;
            };
            this.collection.sort();
            this.collection.each(function(background) {
                background.set('editable', this.editable);
                var backgroundView = new BackgroundView({
                    model: background
                });
                this.$el.append(backgroundView.render().el);
            }, this);
            return this;
        }
    });
    return view
});