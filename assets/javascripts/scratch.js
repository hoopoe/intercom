var empq = [];
empq.push({"q":"Emp Question 1?: ", "a": "N/A"});
empq.push({"q":"Emp Question 2?: ", "a": "N/A"});

var mgrq = [];
mgrq.push({"qh":"Сильные стороны сотрудника"});
mgrq.push({"qq":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий ", "a": ""});
mgrq.push({"qq":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий ", "a": ""});
mgrq.push({"qq":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий ", "a": ""});
mgrq.push({"q":"Другое качество ", "a": ""});

mgrq.push({"qh":"Качества сотрудника, которые стоило бы улучшить"});
mgrq.push({"qq":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий ", "a": ""});
mgrq.push({"qq":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий ", "a": ""});
mgrq.push({"qq":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий ", "a": ""});
mgrq.push({"q":"Другое качество ", "a": ""});

mgrq.push({"lq":"Лояльность к компании", "a": 1});
mgrq.push({"rq":"Необходимость личной беседы", "a": 2});

mgrq.push({"qh":"Рекомендации руководителя"});
mgrq.push({"q":"Комментарий ", "a": ""});

mgrq.push({"fq":"Решения и задачи на ближайший год", "a": ""});

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

///////////////////////////////
var t = new app.Event
var evnt = {}
evnt['name'] = "Test 2014";
t.set('event', evnt)
t.save()


////////////////////////////// delete
var t = new app.Event
t.set('id', 1)
t.destroy()