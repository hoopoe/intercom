define([
 'app/profile/generalM'
], function(EmployerData) {
    var emp = Backbone.Model.extend({
        urlRoot: '/tercomin/api/v1/user_profile/',
        initialize: function() {
             _.bindAll(this, "getData");
        },
        validate: function(attrs, options) {
          //todo: moved to data model
        },
        getData: function(name) {
            if (this.get('profile') !== undefined) {
                if (this.get('profile').data !== undefined) {
                    try {                
                        var data = JSON.parse(this.get('profile').data);
                        return data[name];
                    } catch (e) {                        
                        return "";
                    }
                }
            }
            return "";
        }
    });

    emp.prototype.parse = function(response) {
        var attr = response && _.clone(response) || {};
        if (response && response.profile.positions) {
            var positions = $.parseJSON(response.profile.positions);
            // var tmp = new app.PositionCollection();
            tmp.reset(positions);
            attr['positions'] = tmp;
        }     
        
        if (response && response.profile.backgrounds) {
            var backgrounds = $.parseJSON(response.profile.backgrounds);            
            // var tmp = new app.BackgroundCollection();
            tmp.reset(backgrounds);
            attr['backgrounds'] = tmp;
        }        

        if (response) {
            var data;
            if (response.profile.data)
                data = $.parseJSON(response.profile.data);                            
            var dataModel = new EmployerData(data);            
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

    emp.prototype.toJSON = function() {
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
      delete json['backgrounds'];
      return json;
    };

    return emp
});