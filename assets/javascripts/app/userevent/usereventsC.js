define([
], function() {
	var UserEvents = Backbone.Collection.extend({
        url: '/tercomin/api/v1/user_profile/search'
    });
    return UserEvents;
});
