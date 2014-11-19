define([
], function() {
	var collection = Backbone.Collection.extend({
        url: '/tercomin/api/v1/user_profile'
    });
    return collection;
});
