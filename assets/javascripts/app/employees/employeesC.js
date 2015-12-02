define([
], function() {
	var Employees = Backbone.Collection.extend({
        url: '/tercomin/api/v1/user_profile'
    });
    return Employees;
});
