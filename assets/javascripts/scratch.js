var empq = [];

empq.push({"type":"personal", "q":"Необходимость личной беседы", "a": 1});
empq.push({"type":"freeform", "q":"Пройденное обучение (корпоративное и самостоятельное)", "a": ""});

empq.push({"type":"header", "q":"Обратная связь"});
empq.push({"type":"header", "q":"Что является Вашими сильными сторонами?"});
empq.push({"type":"quality", "q":"Качеcтво", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"quality", "q":"Качеcтво", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"quality", "q":"Качеcтво", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"q":"Другое качество", "a": ""});

empq.push({"type":"header", "q":"Что хотелось бы подтянуть?"});
empq.push({"type":"quality", "q":"Качеcтво", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"quality", "q":"Качеcтво", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"quality", "q":"Качеcтво", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"q":"Другое качество ", "a": ""});

empq.push({"type":"header", "q":"В какой мере Вы удовлетворены следующими факторами в нашей компании?"});
empq.push({"type":"interest", "q":"Интересность работы (проекта)", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"correspond", "q":"Соответствие моей квалификации работе, которую я выполняю", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"prospects", "q":"Наличие перспектив должностного продвижения", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"myqualification", "q":"Моя квалификация за последний год", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"info", "q":"Информированность о делах коллектива и компании", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"workspace", "q":"Рабочее место", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"infra", "q":"Инфраструктура (кухня, уборка помещений, WC и т.д.)", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"salary", "q":"Заработная плата", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"feedback", "q":"Обратная связь от руководителя", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"help", "q":"Помощь и поддержка руководителя", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"relationship", "q":"Отношения с коллегами", "a": 1});
empq.push({"q":"Комментарий", "a": ""});

empq.push({"type":"header", "q":"События, проблемы, пожелания"});
empq.push({"type":"freeform", "q":"Какое событие прошедшего года, относящиеся к Вашей работе, является для Вас самым важным? ", "a": ""});
empq.push({"type":"freeform", "q":"Есть ли у Вас проблемы, связанные с текущими обязанностями? Какие?", "a": ""});
empq.push({"type":"freeform", "q":"Чему Вы хотели бы поучиться (посетить конференцию, семинар, тренинг, сертифицироваться, повысить квалификацию самостоятельно)?", "a": ""});
empq.push({"type":"freeform", "q":"Какие предложения по улучшению работы в компании Вы хотели бы предложить?", "a": ""});
empq.push({"type":"freeform", "q":"Какие факторы (три в порядке убывания значимости) наиболее часто вызывают у вас позитив/вдохновляют/помогают работе?", "a": ""});
empq.push({"type":"freeform", "q":"Какие факторы (три в порядке убывания значимости) наиболее часто раздражают/мешают работе? ", "a": ""});
empq.push({"type":"bonus", "q":"Какие льготы или поощрения Вы хотели бы получать в дополнение к заработной плате?", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"insurance", "q":"Довольны ли Вы качеством обслуживания нашей страховой компании (ДМС)?", "a": 1});
empq.push({"q":"Комментарий", "a": ""});

empq.push({"type":"desire", "q":"Есть ли у Вас желание (необходимость) изучать английский язык?", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"satisfied", "q":"Меня устраивает качество преподавания английского языка в нашей компании (и расписание)", "a": 1});
empq.push({"q":"Комментарий", "a": ""});

empq.push({"type":"desire", "q":"Есть ли у Вас желание (необходимость) изучать немецкий язык?", "a": 1});
empq.push({"q":"Комментарий", "a": ""});
empq.push({"type":"satisfied", "q":"Меня устраивает качество преподавания немецкий языка в нашей компании (и расписание)", "a": 1});
empq.push({"q":"Комментарий", "a": ""});

empq.push({"q":"Какие прочие темы Вы хотели бы поднять на аттестации? ", "a": ""});

var mgrq = [];
mgrq.push({"type":"header", "q":"Сильные стороны сотрудника"});
mgrq.push({"type":"quality", "q":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий", "a": ""});
mgrq.push({"type":"quality", "q":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий", "a": ""});
mgrq.push({"type":"quality", "q":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий", "a": ""});
mgrq.push({"q":"Другое качество", "a": ""});

mgrq.push({"type":"header", "q":"Качества сотрудника, которые стоило бы улучшить"});
mgrq.push({"type":"quality", "q":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий", "a": ""});
mgrq.push({"type":"quality", "q":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий", "a": ""});
mgrq.push({"type":"quality", "q":"Качеcтво", "a": 1});
mgrq.push({"q":"Комментарий", "a": ""});
mgrq.push({"q":"Другое качество", "a": ""});

mgrq.push({"type": "loyality", "q":"Лояльность к компании", "a": 1});
mgrq.push({"type": "mgr_correspond", "q":"Соответствие сотрудника занимаемой должности", "a": 1});
mgrq.push({"type":"personal", "q":"Необходимость личной беседы", "a": 1});

mgrq.push({"type":"header", "q":"Рекомендации руководителя"});
mgrq.push({"q":"Комментарий", "a": ""});

mgrq.push({"type":"freeform", "q":"Решения и задачи на ближайший год", "a": ""});

var hrForm = [];
hrForm.push({"q":"Дата проведения", "a": ""});
// hrForm.push({"type":"freeform", "q":"Задачи на ближайший год", "a": ""});
//hrForm.push({"type":"freeform", "q":"Оценка выполнения персональных задач, поставленных на предыдущей аттестации", "a": ""});
hrForm.push({"type":"header", "q":"Решения:"});

hrForm.push({"type":"hr-results", 
	"a00":"Решения и задачи на ближайший год", "a01": "План выполнения и критерии оценки", "a02": "Ответственный",
	"a11":"", "a11": "", "a12": "",
	"a22":"", "a22": "", "a22": "",
	"a31":"", "a31": "", "a32": "",
	"a41":"", "a41": "", "a42": "",
	"a51":"", "a51": "", "a52": ""
});

var groups = [{"n":"c9","m":{"300":"Pomidor Senior"},"e":{"298":"Ivan Ivanov"}},{"n":"c9","m":{"300":"Pomidor Senior","298":"Ivan Ivanov"},"e":{"302":"Walle Walle"}}]

var body = {};
body['empForm'] = empq;
body['mgrForm'] = mgrq;
body['hrForm'] = hrForm;

var Event = Backbone.Model.extend({
    urlRoot: '/tercomin/api/v1/event'
});

var t = new Event
var evnt = {}
evnt['body'] = JSON.stringify(body);
evnt['name'] = "Аттестация 2014";
evnt['groups'] = JSON.stringify(groups);

t.set('event', evnt)
t.save()

///////////////////////////////
var empq = [];
empq.push({"type":"header", "q":"Добрый день,"});
empq.push({"type":"header", "q":"Вопросы для опроса по Красному озеру:"});
empq.push({"type":"general_ko", "q":"Планируете ли Вы поехать на Красное Озеро?", "a": 1});
empq.push({"type":"transport_ko", "q":"Как Вы планируете добираться?", "a": 1});
empq.push({"type":"service_ko", "q":"Планируете ли пользоваться услугами проката?", "a": 1});
empq.push({"type":"instructor_ko", "q":"Планируете ли пользоваться услугами инструктора?", "a": 1});
empq.push({"type":"freeform", "q":"Пожелания по проживанию в коттедже", "a": ""});
empq.push({"type":"header", "q":"Спасибо!"});

var body = {};
body['empForm'] = empq;

var Event = Backbone.Model.extend({
    urlRoot: '/tercomin/api/v1/event'
});

var t = new Event
var evnt = {}
evnt['body'] = JSON.stringify(body);
evnt['name'] = "Красное озеро 2015";
t.set('event', evnt)
t.save()