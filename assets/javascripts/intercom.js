$(function() {

    $('#header').hide();

    console.log($("#simpleText"));
    console.log("init");

    var Router = Backbone.Router.extend({
        routes: {
            "*MyPage": "MyPage",
            "Employers": "Employers",
            "News": "News",
            "Groups": "Groups"
        },
        MyPage: function(path) {
            console.log(path);
        },
        Employers: function(path) {
            console.log(path);
        },
        News: function(path) {
            console.log(path);
        },
        Groups: function(path) {
            console.log(path);
        }

    });

    var rout = new Router();

    rout.on('route:MyPage', function(id) {
        console.log(id);
        $("#Cat").html("<img src='http://cs614717.vk.me/v614717486/5d05/GQaqR2lfPjk.jpg'>");
    });
    rout.on('route:Employers', function(id){
        console.log(id);
        $("#Cat").html("<img src='http://cs614717.vk.me/v614717486/5d0c/enig6oYGH-s.jpg'>");
    });
    rout.on('route:News', function(id){
        console.log(id);
    });
    rout.on('route:Groups', function(id){
        console.log(id);
    });

    Backbone.history.start();

    var groupCollection = Backbone.Collection.extend({
        url: 'http://localhost:3000/groups.json'
    });

    var groupList = new groupCollection

    groupList.fetch({
        error: function() {
            console.log("some errors");
        },
        success: function() {
            console.log("it's ok");
            $("#simpleText").html("Groups:");
            //1 sublime plugin (beautify js)
            //2 git aliases				
            //3 fix it
            //4 read: backbone view, model
            //5 crlf configuration
            //_.each(this.groupList, function(g){ console.log(g); });
            _.each(groupList.toJSON()[0].groups, function(g) {
                console.log(g.name);
                $("#simpleText").append('<li>' + g.name + '</li>');
            })
            //$("#simpleText").html("put groups from redmine");
        }
    });
});
$(function() {

    var userCollection = Backbone.Collection.extend({
        url: 'http://localhost:3000/users.json'
    });

    var userList = new userCollection

    userList.fetch({
        error: function() {
            console.log("some errors");
        },
        success: function() {
            console.log("it's ok");
            $("#simpleText").html("Users:");
            _.each(userList.toJSON()[0].users, function(k) {
                console.log(k.firstname);
                $("#simpleText").append('<li>' + k.firstname + '</li>');
            })
        }
    });
});