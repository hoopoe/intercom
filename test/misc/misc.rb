require 'nokogiri' 
require 'json'
tmp = '<p>
    Менеджер: <a href="/users/12" class="user active">Pomidor Senior</a><br>
    
    Разработчик: <a href="/users/10" class="user active">Ivan Ivanov</a>, <a href="/users/11" class="user active">Petr Petrov</a>, <a href="/users/14" class="user active">Walle Walle</a><br>
    </p>
    '
page = Nokogiri::HTML(tmp)
pp = Hash.new
items = page.css('a')
for i in items
	name = i.text
	id = i["href"].split('/').pop	
	pp[name] = id
end

org = []
org.push(:n=>"area 8", :m=>["Pomidor Senior"], :e=>["Ivan Ivanov", "Petr Petrov"])
org.push(:n=>"test group", :m=>["Pomidor Senior", "Ivan Ivanov"], :e=>["Walle Walle"])


orgid = []
for g in org
	gid = Hash.new
	gid['n'] = g[:n]
	m = {}
	for mgr in g[:m]
		m[pp[mgr].to_i] = mgr
	end
	gid[:m] = m

	gid['e'] = []
	for emp in g[:e]
		gid['e'].push(pp[emp].to_i => emp)
	end
	orgid.push(gid)
end
puts orgid

# puts orgid[1]['e'].to_json
# puts orgid[1][:m].keys.include?(10)
# userid = 10
# userGropus = orgid.find_all {|i|  i['m'].include?(userid) }
# puts !userGropus.empty?


