define([
  'app/profile/position/positionV'
], function(PositionView) {
  var view = Backbone.View.extend({
    tagName: 'ul',
    className: 'positions-view',
    editable: false,        
    setEditable:function(e) {
        this.editable = e;            
    },
    render: function() {
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