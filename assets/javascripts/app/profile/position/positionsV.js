define([
    'app/profile/position/positionV'
], function(PositionView) {
    var view = Backbone.View.extend({
        tagName: 'ul',
        className: 'positions-view',
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
            this.collection.each(function(position) {
                position.set('editable', this.editable);
                var positionView = new PositionView({
                    model: position
                });
                this.$el.append(positionView.render().el);
            }, this);
            return this;
        }
    });
    return view
});