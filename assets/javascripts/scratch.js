var q = [];
q.push({"q":"question 1", "a": "a 3"});
q.push({"q":"question 2", "a": "a 2"});
q.push({"q":"question 3", "a": "a 3"});
var t = new app.Event
var event = {}
event['body'] = JSON.stringify(q);
event['name'] = "Attestation";
t.set('event', event)
t.save()


////////////////////////////// delete
var t = new app.Event
t.set('id', 1)
t.destroy()