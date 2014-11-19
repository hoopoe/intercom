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

	var currentView;
	var showView = function(view) {
        if (this.currentView) {
        	// app.topMenuView.deactivate(view.name);          
            this.currentView.close();
        }
        this.currentView = view;
        this.currentView.render();
        $(".content").html(this.currentView.el); 
        // app.topMenuView.activate(view.name);       
    }

	return {
	    initialize: initialize,
	    logMeIn: logMeIn,
	    showView: showView
	};
	
});