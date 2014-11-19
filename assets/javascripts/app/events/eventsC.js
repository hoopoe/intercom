define([
], function() {
	var ev = Backbone.Model.extend({
        urlRoot: '/tercomin/api/v1/event'
    });
    var collection = Backbone.Collection.extend({
        url: '/tercomin/api/v1/event',
        model: ev
    });
    return collection;
});
