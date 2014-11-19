requirejs.config({
    baseUrl: 'plugin_assets/tercomin/javascripts',
    paths: {        
        i18n: 'lib/i18next.amd.min',
        router: 'app/router',
        // profileView: 'app/profile/profileV'
    },
    map: {
	  '*': {
	    'profileTemplate': 'app/profile/profile.html',
        'settigsTemplate': 'app/settings/settings.html',
        'employeeTemplate': 'app/employees/employee.html'
	  }
	}
});

requirejs(['app/main'], function(App){
    App.initialize();
    App.topmenu().render();
});