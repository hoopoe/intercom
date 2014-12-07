define([
	'app/events/eventM'
], function(EventModel) {
    var Events = Backbone.Collection.extend({
        url: '/tercomin/api/v1/event',
        model: EventModel
    });
    return Events;
});
