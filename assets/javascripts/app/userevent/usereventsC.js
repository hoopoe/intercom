define([
], function() {
	var UserEvents = Backbone.Collection.extend({
        url: '/tercomin/api/v1/user_event/search'
    });
    return UserEvents;
});
