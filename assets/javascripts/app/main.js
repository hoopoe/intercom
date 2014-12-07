define([
    'router',
    'app/topmenu/topmenuV'
], function (Router, Topmenu, require) {
  var initialize = function() {
    /* alias away the sync method */
    Backbone._sync = Backbone.sync;

    /* define a new sync method */
    Backbone.sync = function(method, model, success, error) {
        /* only need a token for non-get requests */
        if (method == 'create' || method == 'update' || method == 'delete') {
            /* grab the token from the meta tag rails embeds */
            var auth_options = {};
            auth_options[$("meta[name='csrf-param']").attr('content')] =
                $("meta[name='csrf-token']").attr('content');
            /* set it as a model attribute without triggering events */
            model.set(auth_options, {
                silent: true
            });
        }
        /* proxy the call to the old sync method */
        return Backbone._sync(method, model, success, error);
    }

    Backbone.View.prototype.close = function() {
        this.remove();
        this.unbind();
        if (this.onClose) {
            this.onClose();
        }
    };
    
  	rivets.adapters[':'] = {
        // set the listeners to update the corresponding DOM element
        observe: function(obj, keypath, callback) {
            if (obj instanceof Backbone.Collection) {
                obj.on('add remove reset', callback);
            }
            obj.on('change:' + keypath, callback);
        },
        // this will be triggered to unbind the Rivets.js events
        unobserve: function(obj, keypath, callback) {
            if (obj instanceof Backbone.Collection) {
                obj.off('add removffe reset', callback);
            }
            obj.off('change:' + keypath, callback);
        },
        // define how Rivets.js should read the propery from our objects
        get: function(obj, keypath) {
            // if we use a collection we will loop through its models otherwise we just get the model properties
            return obj instanceof Backbone.Collection ? obj.models : obj.get(keypath);
        },
        // It gets triggered whenever we want update a model using Rivets.js
        set: function(obj, keypath, value) {
            obj.set(keypath, value);
        }
    };

    rivets.formatters.date = function(value) {
        return moment(value).format('MMM DD, YYYY');
    }

    rivets.formatters.prependRoot = function(value){
      return "/tercomin/" + value;
    }

    rivets.formatters.eq = function (value, args) {
        if (typeof value === 'boolean') {
            return value === Boolean(args);
        }
        return value === args;
    };

    rivets.binders['href-rooted'] = function(el, value) {
        var root = el.getAttribute('data-root');
        el.href = root + value;
    }

    rivets.binders['href-replace'] = function(el, value) {
        var root = el.getAttribute('data-replace');
        el.href = root.replace('%', value);
    }

    rivets.binders['src-strict'] = function(el, value) {
        if (value === 'noavatar')
            value = "";
      var img = new Image()

      img.onload = function() {        
        $(el).attr('src', value)
      }
      img.src = value
    }

    // Backbone.View = (function(View) {
    //    return View.extend({
    //         constructor: function(options) {
    //             this.options = options || {};
    //             View.apply(this, arguments);
    //         }
    //     });
    // })(Backbone.View);

    Router.initialize(); 

  }

  var topmenu = function() {
    var menu = new Topmenu();
    return menu;
  }

  return {
    initialize: initialize,
    topmenu: topmenu
  };
});