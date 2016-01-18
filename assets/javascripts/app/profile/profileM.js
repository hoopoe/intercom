define([
 'app/profile/generalM',
 'app/profile/position/positionsC',
 'app/profile/background/backgroundsC'
], function(EmployerData, PositionCollection, BackgroundCollection) {
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
            var tmp = new PositionCollection();
            tmp.reset(positions);
            attr['positions'] = tmp;
        }     
        
        if (response && response.profile.backgrounds) {
            var backgrounds = $.parseJSON(response.profile.backgrounds);            
            var tmp = new BackgroundCollection();
            tmp.reset(backgrounds);
            attr['backgrounds'] = tmp;
        }        

        if (response) {            
            var data = undefined;
            if (response.profile.data) {
                data = $.parseJSON(response.profile.data); 
            }
            
            var dataModel = new EmployerData(data);            
            dataModel.set('id', response.profile.id);
            dataModel.set('firstname', response.profile.firstname);
            dataModel.set('lastname', response.profile.lastname);
            dataModel.set('mail', response.profile.mail);            
            dataModel.set('avatar_url', response.profile.avatar_url);
            dataModel.set('edit_prop', 'None');
            dataModel.set('editable', response.editable);
            dataModel.set('fullaccess', response.fullaccess);
            attr['data'] = dataModel;
        }        
        return attr;
    };

    emp.prototype.toJSON = function() {
      var json = _.clone(this.attributes);    
      
      for(var attr in json) {
        if((json[attr] instanceof Backbone.Model) && (attr === 'data')) { 
            var generalData = $.extend(true, {}, json[attr]);
            generalData.unset('edit_prop');
            generalData.unset('editable');
            generalData.unset('fullaccess');
            json['profile']['data'] = JSON.stringify(generalData);
        }
      }
      delete json['editable'];
      delete json['fullaccess'];
      delete json['data'];
      delete json['positions'];
      delete json['backgrounds'];
      return json;
    };

    return emp
});