define([
 
], function() {
	var model = Backbone.Model.extend({
      urlRoot: '/tercomin/api/v1/user_event'
  	});
	return model
});