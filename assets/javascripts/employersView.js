var app = app || {};

$(function() {

    app.employerTemplate = $("#employer-template").html();

    app.Employer = Backbone.Model.extend({
        urlRoot: '/tercomin/api/v1/user_profile/',
        validate: function(attrs, options) {
            try {                
                JSON.parse(attrs.profile.data);
            } catch (e) {
                return "Profile data is not valid";
            }
            try {                            
                JSON.parse(attrs.profile.positions);
            } catch (e) {
                return "Profile positions is not valid";
            }

            if (attrs.profile.room_number) {
                if (attrs.profile.room_number.length > 6) {
                    return "Room number should be less than 6 symbols";
                }
                var re = /^[0-9\-]+$/;
                if (!re.test(attrs.profile.room_number)) {
                    return "Room number is invalid /^[0-9\-]+$/";
                }
            }
        }
    });

    app.Employer.prototype.parse = function(response) {        
        var attr = response && _.clone(response) || {};
        if (response && response.profile.positions) {
            var positions = $.parseJSON(response.profile.positions);
            var tmp = new app.PositionCollection();
            tmp.reset(positions);
            attr['positions'] = tmp;
        }

        if (response) {
            var data;
            if (response.profile.data)
                data = $.parseJSON(response.profile.data);
            var dataModel = new Backbone.Model(data);            
            dataModel.set('id', response.profile.id);
            dataModel.set('firstname', response.profile.firstname);
            dataModel.set('lastname', response.profile.lastname);
            dataModel.set('mail', response.profile.mail);
            dataModel.set('avatar_url', response.profile.avatar_url);
            dataModel.set('edit_prop', 'None');
            dataModel.set('editable', response.editable);      
            attr['data'] = dataModel;
        }
        // console.log(attr);
        return attr;
    };

    app.Employer.prototype.toJSON = function() {
      var json = _.clone(this.attributes);      
      for(var attr in json) {
        if((json[attr] instanceof Backbone.Model) && (attr === 'data')) {          
            json['profile']['data'] = JSON.stringify(json[attr]);            
            delete json['profile']['data']['edit_prop']
            delete json['profile']['data']['editable']
        }
      }
      delete json['data'];
      delete json['positions'];
      // console.log(json);      
      return json;
    };

    app.EmployerCollection = Backbone.Collection.extend({
        url: '/tercomin/api/v1/user_profile'
    });

    app.EmployerView = Backbone.View.extend({
        template: _.template(app.employerTemplate),
        initialize: function() {},
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
    });

    app.EmployersView = Backbone.View.extend({
        name: "employers",

        initialize: function() {
            this.$el.html('');
            this.$el.append("<div class='employer-list'> </div>");
            this.listenTo(this.collection, 'add', this.add);
        },

        add: function(item) {
            var view = new app.EmployerView({
                model: item
            });
            this.$(".employer-list").append(view.render().el);
        },

        initScroll: function(extraParams) {
            this.infiniScroll = new Backbone.InfiniScroll(this.collection, {
                success: this.appendRender,
                includePage: true,
                pageSizeParam: "limit",
                extraParams: extraParams
            });
        },

        render: function() {
            return this;
        },

        onClose: function() {
            this.infiniScroll.destroy();
        }
    });
});