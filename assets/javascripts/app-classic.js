requirejs.config({
    baseUrl: 'plugin_assets/tercomin/javascripts',
    paths: {
        // app: 'app',
        router: 'app/router',
        profileView: 'app/profile/profileV-classic'
    }
});

requirejs(['app/main'], function(App) {
    App.initialize();
});