define([
], function() {
	var m = Backbone.Model.extend({});
 	collection = Backbone.Collection.extend({
        model: m
    });
    return collection;
});
