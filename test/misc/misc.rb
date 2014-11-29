require 'nokogiri' 
require 'json'
tmp = '<p>
    Разработчик: <a href="/users/14" class="user active">Cherry Karambolina</a>, <a href="/users/11" class="user active">Ivan Ivanov</a>, <a href="/users/12" class="user active">Petr Petrov</a>, <a href="/users/13" class="user active">Pomidor Senior</a>, <a href="/users/15" class="user active">Walle Walle</a><br>
    </p>'
    
page = Nokogiri::HTML(tmp)
pp = Hash.new
items = page.css('a')
for i in items
	name = i.text
	id = i["href"].split('/').pop	
	pp[name] = id
end

org = []
org.push(:n=>"c9",
	:m=>["Pomidor Senior"], 
	:e=>["Ivan Ivanov"])

org.push(:n=>"c9",
	:m=>["Pomidor Senior", "Ivan Ivanov"], 
	:e=>["Walle Walle"])

orgid = []
for g in org
	gid = Hash.new
	gid['n'] = g[:n]
	m = {}
	for mgr in g[:m]
		m[pp[mgr].to_i] = mgr
	end
	gid[:m] = m
	e = {}
	for emp in g[:e]
		e[pp[emp].to_i] = emp
	end
	gid[:e] = e
	orgid.push(gid)
end
a = orgid.to_json

@ev_groups = JSON.parse(a)
puts @ev_groups.to_json

# b = @ev_groups.map{|i| i['e'] if i['m'].include?("12")}    
# puts b.reduce({}, :merge)

# puts orgid[1]['e'].to_json
# puts orgid[1][:m].keys.include?(10)
# userid = 10
# userGropus = orgid.find_all {|i|  i['m'].include?(userid) }
# puts !userGropus.empty?


