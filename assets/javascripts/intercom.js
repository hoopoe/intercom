$(function() {

    $('#header').hide();

    console.log($("#simpleText"));
    console.log("init");

    var Router = Backbone.Router.extend({
        routes: {
            "MyPage": "MyPage",
            "Employers": "Employers",
            "News": "News",
            "Groups": "Groups"
        },
        MyPage: function(path){
            $("#Cat").html('<img src="http://cs614717.vk.me/v614717486/5cf0/2dHRpySOW8s.jpg" >');
        },
        Employers: function(path){
            $("#Cat").html('<img src="http://cs614717.vk.me/v614717486/5d0c/enig6oYGH-s.jpg" >');
        },        
        News: function(path){
            $("#Cat").html('<img src="http://cs614717.vk.me/v614717486/5d05/GQaqR2lfPjk.jpg" >');
        },
        Groups: function(path){
            $("#Cat").html('<img src="http://cs614717.vk.me/v614717486/5cf7/N0tlAwHRwI8.jpg" >');
        },
    });

    var rout = new Router();

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