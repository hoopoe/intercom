define([

], function() {
    var emp = Backbone.Model.extend({
        urlRoot: '/tercomin/api/v1/user_profile/',
        initialize: function() {
             _.bindAll(this, "getData");
        },
        validate: function(attrs, options) {
          //todo: moved to data model
        },
        getData: function(name) {
            if (this.get('profile') !== undefined) {
                if (this.get('profile').data !== undefined) {
                    try {                
                        var data = JSON.parse(this.get('profile').data);                        
                        return data[name];
                    } catch (e) {                        
                        return "";
                    }
                }
            }
            return "";
        }
    });

    return emp
});