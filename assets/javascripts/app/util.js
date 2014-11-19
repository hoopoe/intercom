define([
    
], function() {
	var initialize = function() {
		console.log("test util");
	}
	var logMeIn = function() {
		if (!window.location.origin) {
            window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }
        window.location = window.location.origin + '/login?back_url=' + window.location.origin + '/tercomin';
	}

	var getHash = function() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };

	var currentView;
	var showView = function(view) {
        if (this.currentView) {
        	// app.topMenuView.deactivate(view.name);
            $("li.menu-item").removeClass("active");       
            this.currentView.close();
        }
        this.currentView = view;
        this.currentView.render();
        $(".content").html(this.currentView.el);
        $("li[value='" + view.name + "']").addClass("active");
        // app.topMenuView.activate(view.name);       
    }

    showError = function(html) {
        if (this.currentView) {
            this.currentView.close();
        }
        $(".content").html(html);
    };

	return {
	    initialize: initialize,
	    logMeIn: logMeIn,
	    showView: showView,
	    getHash: getHash,
        showError: showError
	};
});