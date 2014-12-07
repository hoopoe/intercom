define([], function() {
  var Event = Backbone.Model.extend({
    urlRoot: '/tercomin/api/v1/event',
    validate: function(attrs, options) {
      if (attrs.event) {
        var body = attrs.event['body']
        if (body) {
          try {
            JSON.parse(body);
          } catch (e) {
            return e.message;
          }
        }
        var groups = attrs.event['groups']
        if (groups) {
          try {
            JSON.parse(groups);
          } catch (e) {
            return e.message;
          }  
        }
      }

    }
  });
  return Event;
});