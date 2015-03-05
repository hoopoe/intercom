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
                var left = a.get("to").substr(a.get("to").lastIndexOf(" "));
                var right = b.get("to").substr(b.get("to").lastIndexOf(" "));                              
                if (left > right) {
                    return -1;
                }
                if (right > left) {
                    return 1;
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