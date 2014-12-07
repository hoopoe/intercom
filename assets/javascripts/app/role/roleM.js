define([
 
], function() {
	var Role = Backbone.Model.extend({
      urlRoot: '/tercomin/api/v1/role'
  	});
	return Role
});