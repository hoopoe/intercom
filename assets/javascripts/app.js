requirejs.config({
    baseUrl: 'plugin_assets/tercomin/javascripts',
    paths: {
        // app: 'app',
        i18n: 'lib/i18next.amd.min',
        router: 'app/router',
        profileView: 'app/profile/profileV'
    }
});

requirejs(['app/main'], function(App){
  App.initialize();
});