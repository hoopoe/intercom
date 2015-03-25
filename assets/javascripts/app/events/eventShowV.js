define([
  'text!app/events/eventShow.html'
], function(EventShowT) {
  GroupView = Backbone.View.extend({
    template: _.template(EventShowT),
    render: function() {
      this.$el.html('');
      this.$el.html($(EventShowT).filter("#event-group-template"));
      rivets.bind(this.el, {
        group: this.model
      });
      return this;
    }
  });

  var view = Backbone.View.extend({
    template: _.template(EventShowT),
    groups: undefined,
    initialize: function() {
      try {
        this.groups = JSON.parse(this.model.get('event').groups);
      } catch (e) {
        console.log(e.message);
      }
    },
    render: function() {
      this.$el.html('');
      this.$el.html($(EventShowT).filter("#event-groups-template"));

      rivets.bind(this.el, {
        evnt: this.model
      });
      _.each(this.groups, function(g) {
        var group = {};
        group.name = g.n;
        group.managers = [];
        group.employees = [];
        for (var key in g.m) {
          group.managers.push({
            'id': key,
            'name': g.m[key],
            'ue_id': key + '_' + this.model.get('id')
          });
        }

        for (var key in g.e) {
          group.employees.push({
            'id': key,
            'name': g.e[key],
            'ue_id': key + '_' + this.model.get('id')
          });
        }

        var v = new GroupView({
          model: group
        });
        this.$el.append(v.render().el);
      }, this);

      return this;
    }
  });
  return view
});