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
        MyPage: function(path) {
            $("#Cat").html('<img src="http://cs614717.vk.me/v614717486/5cf0/2dHRpySOW8s.jpg" >');
        },
        Employers: function(path) {
            $("#Cat").html('<img src="http://cs614717.vk.me/v614717486/5d0c/enig6oYGH-s.jpg" >');
        },
        News: function(path) {
            $("#Cat").html('<img src="http://cs614717.vk.me/v614717486/5d05/GQaqR2lfPjk.jpg" >');
        },
        Groups: function(path) {
            $("#Cat").html('<img src="http://cs614717.vk.me/v614717486/5cf7/N0tlAwHRwI8.jpg" >');
        },
    });

    var rout = new Router();

    Backbone.history.start();

    var groupCollection = Backbone.Collection.extend({
        url: 'http://localhost:3000/api/user_profile.json'
    });

    var groupList = new groupCollection

    groupList.fetch({
        error: function() {
            console.log("some errors");
        },
        success: function() {
            console.log("it's ok1");
            $("#mainbody").html("<ul > </ul>");
            _.each(groupList.toJSON(), function(g) {
                $("#mainbody ul").append('<li>' +
                    'user_id:' + g.user_profile.user_id + ' ' + g.user_profile.skills + '</li>');
            })
        }
    });
});
// $(function() {

//     var userCollection = Backbone.Collection.extend({
//         url: 'http://localhost:3000/users.json'
//     });

//     var userList = new userCollection

//     userList.fetch({
//         error: function() {
//             console.log("some errors");
//         },
//         success: function() {
//             console.log("it's ok");
//             $("#simpleText").html("Users:");
//             _.each(userList.toJSON()[0].users, function(k) {
//                 console.log(k.firstname);
//                 $("#simpleText").append('<li>' + k.firstname + '</li>');
//             })
//         }
//     });
// });