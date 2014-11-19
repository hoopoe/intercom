define([
    'app/profile/background/backgroundV'
], function(BackgroundView) {
  var view = Backbone.View.extend({
    tagName: 'ul',
    className: 'backgrounds-view',
    editable: false,        
    setEditable:function(e) { this.editable = e; },
    render: function() {            
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