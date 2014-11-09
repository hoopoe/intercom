var empq = [];
empq.push({"q":"Emp Question 1?: ", "a": "N/A"});
empq.push({"q":"Emp Question 2?: ", "a": "N/A"});

var mgrq = [];
mgrq.push({"q":"Test 1?: ", "a": "N/A"});
mgrq.push({"q":"Test 2?: ", "a": "N/A"});

var groups = [];
groups.push({"n":"area 8", "m": {"17":"Pomidor Senior"}, "e":{"15":"Ivan Ivanov", "16":"Petr Petrov"}})
groups.push({"n":"test group", "m": {"17":"Pomidor Senior", "15":"Ivan Ivanov"}, "e":{"19":"Walle Walle"}})
	
var body = {};
body['empForm'] = empq;
body['mgrForm'] = mgrq;

var t = new app.Event
var evnt = {}
evnt['body'] = JSON.stringify(body);
evnt['name'] = "Аттестация 2014";
evnt['groups'] = JSON.stringify(groups);

t.set('event', evnt)
t.save()


var t = new app.Event
var evnt = {}
evnt['name'] = "Test 2014";
t.set('event', evnt)
t.save()


////////////////////////////// delete
var t = new app.Event
t.set('id', 1)
t.destroy()