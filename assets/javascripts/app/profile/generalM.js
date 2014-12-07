define([
 
], function() {
	var data = Backbone.Model.extend({
        validateLength: function(attrs, name, len) {
            if (attrs[name].length > len) {            
                return name +" should be less than " + len + " symbols";
            }
        },
        validate: function(attrs, options) {
            if (attrs['room_number']) {     
                if (attrs['room_number'].length > 6) {
                    return "Room number should be less than 6 symbols";
                }
                var re = /^[0-9\-]+$/;
                if (!re.test(attrs['room_number'])) {
                    return "Room number is invalid /^[0-9\-]+$/";
                }                
            }
            
            if (attrs['project']) {                
                var err = this.validateLength(attrs, 'project', 100);
                if (err) return err;                
            }
            if (attrs['project_extra']) {                 
                var err = this.validateLength(attrs, 'project_extra', 200);
                if (err) return err;
            }
            if (attrs['position']) {                
                var err = this.validateLength(attrs, 'position', 100);
                if (err) return err;
            }
            if (attrs['summary']) {
                var err = this.validateLength(attrs, 'summary', 5000);
                if (err) return err;
            }
            if (attrs['skills']) {
                var err = this.validateLength(attrs, 'skills', 5000);
                if (err) return err;
            }
            if (attrs['coureses']) {
                var err = this.validateLength(attrs, 'coureses', 5000);
                if (err) return err;
            }
        }
    });
	return data;
});