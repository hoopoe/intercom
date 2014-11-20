require 'nokogiri' 
require 'json'
tmp = '<p>
    Разработчик: <a href="/users/217" class="user active">Aleksandr Lapitcky</a>, <a href="/users/237" class="user active">Aleksandr Nevzorov</a>, <a href="/users/188" class="user active">Alexander Evdokimov</a>, <a href="/users/240" class="user active">Alexander Omelchuk</a>, <a href="/users/244" class="user active">Alexander Pavlov</a>, <a href="/users/181" class="user active">Alexandr Davydenko</a>, <a href="/users/151" class="user active">Alexey Andreev</a>, <a href="/users/162" class="user active">Alexey Bryukhanov</a>, <a href="/users/203" class="user active">Alexey Kashkarov</a>, <a href="/users/225" class="user active">Alexey Malygin</a>, <a href="/users/245" class="user active">Alexey Parshikov</a>, <a href="/users/250" class="user active">Alexey Popov</a>, <a href="/users/267" class="user active">Alexey Syrtsev</a>, <a href="/users/156" class="user active">Alisa Bakaeva</a>, <a href="/users/273" class="user active">Anatoly Tutov</a>, <a href="/users/174" class="user active">Andrei Gazukin</a>, <a href="/users/178" class="user active">Andrei Grebenshchikov</a>, <a href="/users/218" class="user active">Andrey Lepikhin</a>, <a href="/users/271" class="user active">Andrey Tikhonov</a>, <a href="/users/169" class="user active">Andrey Vakhutov</a>, <a href="/users/193" class="user active">Andrey Zonov</a>, <a href="/users/270" class="user active">Anna Tiunova</a>, <a href="/users/157" class="user active">Anton Bakanov</a>, <a href="/users/209" class="user active">Anton Korobeynikov</a>, <a href="/users/208" class="user active">Anton Kozlov</a>, <a href="/users/285" class="user active">Artem Cherkasov</a>, <a href="/users/164" class="user active">Askhad Burnaev</a>, <a href="/users/222" class="user active">Boris Lyubimov</a>, <a href="/users/223" class="user active">David Makeev</a>, <a href="/users/187" class="user active">Denis Dydychkin</a>, <a href="/users/252" class="user active">Denis Pushkarev</a>, <a href="/users/170" class="user active">Denis Vishnyakov</a>, <a href="/users/191" class="user active">Dmitri Zaporozhtsev</a>, <a href="/users/182" class="user active">Dmitry Demin</a>, <a href="/users/189" class="user active">Dmitry Erofeev</a>, <a href="/users/280" class="user active">Dmitry Fomushkin</a>, <a href="/users/200" class="user active">Dmitry Kallistov</a>, <a href="/users/205" class="user active">Dmitry Kichinsky</a>, <a href="/users/210" class="user active">Dmitry Kosarev</a>, <a href="/users/214" class="user active">Dmitry Labuzov</a>, <a href="/users/221" class="user active">Dmitry Luciv</a>, <a href="/users/233" class="user active">Dmitry Mordvinov</a>, <a href="/users/247" class="user active">Dmitry Plyako</a>, <a href="/users/265" class="user active">Dmitry Solomennikov</a>, <a href="/users/241" class="user active">Egor Osipenko</a>, <a href="/users/196" class="user active">Ekaterina Ivanenko</a>, <a href="/users/149" class="user active">Eldar Abusalimov</a>, <a href="/users/278" class="user active">Elena Fedotova</a>, <a href="/users/282" class="user active">Elena Khitrova</a>, <a href="/users/204" class="user active">Elena Kicherova</a>, <a href="/users/216" class="user active">Elena Labutina</a>, <a href="/users/262" class="user active">Elena Smirnova</a>, <a href="/users/229" class="user active">Eugenia Takun</a>, <a href="/users/274" class="user active">Eugeny Ulanov</a>, <a href="/users/160" class="user active">Evgeniy Bocharov</a>, <a href="/users/266" class="user active">Felix Sulima</a>, <a href="/users/185" class="user active">Gennady Doronin</a>, <a href="/users/173" class="user active">Gennady Gavrilov</a>, <a href="/users/248" class="user active">Gennady Podolsky</a>, <a href="/users/165" class="user active">Igor Bukharov</a>, <a href="/users/215" class="user active">Igor Labutin</a>, <a href="/users/289" class="user active">Igor Shevel</a>, <a href="/users/166" class="user active">Igor Varfolomeev</a>, <a href="/users/198" class="user active">Ilya Ivlev</a>, <a href="/users/159" class="user active">Ivan Bogdanyuk</a>, <a href="/users/243" class="user active">Ivan Pavlik</a>, <a href="/users/269" class="user active">Ivan Timofeev</a>, <a href="/users/286" class="user active">Kirill Churilin</a>, <a href="/users/211" class="user active">Kirill Kostyryashenko</a>, <a href="/users/259" class="user active">Kirill Skorodumov</a>, <a href="/users/260" class="user active">Kirill Smirnov</a>, <a href="/users/150" class="user active">Ksenia Altbregen</a>, <a href="/users/290" class="user active">Ksenia Shigapova</a>, <a href="/users/192" class="user active">Larisa Zelenkova</a>, <a href="/users/284" class="user active">Leonid Tsarev</a>, <a href="/users/232" class="user active">Lev Mishin</a>, <a href="/users/291" class="user active">Margarita Shlykova</a>, <a href="/users/272" class="user active">Maria Tikhonova</a>, <a href="/users/226" class="user active">Marina Maltseva</a>, <a href="/users/228" class="user active">Marina Medvedeva</a>, <a href="/users/167" class="user active">Matvei Vasetsov</a>, <a href="/users/158" class="user active">Maxim Bekhterev</a>, <a href="/users/251" class="user active">Maxim Prokoshin</a>, <a href="/users/292" class="user active">Maxim Shteert</a>, <a href="/users/190" class="user active">Maxim Zhuravlev</a>, <a href="/users/220" class="user active">Michael Lukin</a>, <a href="/users/261" class="user active">Mikhail Smirnov</a>, <a href="/users/194" class="user active">Nadezhda Zonova</a>, <a href="/users/183" class="user active">Natalia Denisova</a>, <a href="/users/171" class="user active">Natalia Volkova</a>, <a href="/users/172" class="user active">Natalia Voyakovskaya</a>, <a href="/users/179" class="user active">Nickolay Grebenshikov</a>, <a href="/users/246" class="user active">Nickolay Penkrat</a>, <a href="/users/163" class="user active">Nikita Bumakov</a>, <a href="/users/177" class="user active">Nikita Granko</a>, <a href="/users/207" class="user active">Nikita Kovalenko</a>, <a href="/users/213" class="user active">Nikita Kutkin</a>, <a href="/users/276" class="user active">Nikolay Fedoruk</a>, <a href="/users/264" class="user active">Nikolay Sokolov</a>, <a href="/users/230" class="user active">Nina Migachyova</a>, <a href="/users/184" class="user active">Oleg Dolgopolov</a>, <a href="/users/199" class="user active">Oleg Isaev</a>, <a href="/users/224" class="user active">Oleg Malikov</a>, <a href="/users/242" class="user active">Olga Osipova</a>, <a href="/users/256" class="user active">Olga Sapershteyn</a>, <a href="/users/258" class="user active">Olga Simindeeva</a>, <a href="/users/175" class="user active">Pavel Golubev</a>, <a href="/users/227" class="user active">Petr Manyakhin</a>, <a href="/users/1" class="user active">Redmine Admin</a>, <a href="/users/287" class="user active">Roman Shadrin</a>, <a href="/users/180" class="user active">Semen Grigorev</a>, <a href="/users/154" class="user active">Sergey Artyushkevich</a>, <a href="/users/161" class="user active">Sergey Bragin</a>, <a href="/users/275" class="user active">Sergey Fedorenko</a>, <a href="/users/277" class="user active">Sergey Fedotov</a>, <a href="/users/279" class="user active">Sergey Fedyukovich</a>, <a href="/users/235" class="user active">Sergey Naumov</a>, <a href="/users/236" class="user active">Sergey Naumov</a>, <a href="/users/293" class="user active">Sergey Shuvalkin</a>, <a href="/users/268" class="user active">Sergey Tarasov</a>, <a href="/users/168" class="user active">Sergey Vakhrushev</a>, <a href="/users/294" class="user active">Sergey Yahontov</a>, <a href="/users/257" class="user active">Stanislav Sartasov</a>, <a href="/users/201" class="user active">Svetlana Kantola</a>, <a href="/users/249" class="user active">Svetlana Polukhina</a>, <a href="/users/288" class="user active">Svetlana Shalova</a>, <a href="/users/195" class="user active">Tatiana Zuyeva</a>, <a href="/users/255" class="user active">Vadim Sabashny</a>, <a href="/users/152" class="user active">Valerian Artemenko</a>, <a href="/users/281" class="user active">Vera Haustova</a>, <a href="/users/202" class="user active">Victor Kats</a>, <a href="/users/239" class="user active">Viktar Novikau</a>, <a href="/users/186" class="user active">Viktor Dudenkov</a>, <a href="/users/234" class="user active">Viktor Nazarov</a>, <a href="/users/254" class="user active">Viktor Rastorguev</a>, <a href="/users/219" class="user active">Vita Loginova</a>, <a href="/users/176" class="user active">Vladimir Gorky</a>, <a href="/users/283" class="user active">Vladimir Khudyakov</a>, <a href="/users/212" class="user active">Vladimir Kocherizhkin</a>, <a href="/users/238" class="user active">Vladimir Nikitin</a>, <a href="/users/263" class="user active">Vladimir Sokolov</a>, <a href="/users/253" class="user active">Vladislav Razhnov</a>, <a href="/users/206" class="user active">Vladlen Klimov</a>, <a href="/users/197" class="user active">Yana Ivashevskaya</a>, <a href="/users/155" class="user active">Yulia Baytserova</a>, <a href="/users/153" class="user active">Yuriy Artemiev</a>, <a href="/users/231" class="user active">Zinaida Minokhodova</a><br>
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
org.push(:n=>"Лифты",
	:m=>["Mikhail Smirnov", "Nickolay Penkrat"], 
	:e=>["Nickolay Penkrat", "Vladimir Kocherizhkin", "Sergey Fedorenko", "Evgeniy Bocharov"])

org.push(:n=>"СКЗ",
	:m=>["Mikhail Smirnov"], 
	:e=>["Aleksandr Pimenov", "Victor Kats", "Olga Sapershteyn", "Sergey Vakhrushev"])

org.push(:n=>"2M",
	:m=>["Mikhail Smirnov"], 
	:e=>["Ekaterina Mosseyko"])

org.push(:n=>"ИИГ",
	:m=>["Mikhail Smirnov"], 
	:e=>["Nikita Kutkin"])

org.push(:n=>"Департамент радиоэлектроники",
	:m=>["Boris Krivoshein", "Gennady Gavrilov"], 
	:e=>["Gennady Gavrilov", "Alexey Andreev", "Andrei Gazukin", "Anton Korobeynikov", "Andrey Lepikhin", "Sergey Shuvalkin"])

org.push(:n=>"Департамент радиоэлектроники",
	:m=>["Boris Krivoshein", "Anton Bondarev"], 
	:e=>["Anton Bondarev", "Alexander Kalmuk", "Dmitry Kosarev", "Vita Loginova"])

org.push(:n=>"Департамент радиоэлектроники",
	:m=>["Boris Krivoshein", "Viktor Nazarov"], 
	:e=>["Viktor Nazarov", "Askhad Burnaev", "Dmitry Kallistov", "Konstantin Kan", "Aleksandr Martinenko", "Larisa Medvedeva", "Aleksey Panasuk"])

org.push(:n=>"Департамент радиоэлектроники",
	:m=>["Boris Krivoshein", "Egor Osipenko", "Gennadiy Deykalo"], 
	:e=>["Egor Osipenko", "Gennadiy Deykalo", "Vladimir Nikitin", "Kirill Smirnov"])

org.push(:n=>"Департамент радиоэлектроники",
	:m=>["Boris Krivoshein", "Egor Osipenko"], 
	:e=>["Egor Osipenko", "Vladimir Sokolov", "Sergey Fedotov"])

org.push(:n=>"Департамент радиоэлектроники",
	:m=>["Boris Krivoshein"], 
	:e=>["Felix Sulima", "Olga Osipova", "Oleg Isaev"])

org.push(:n=>"деп мобильные технологии",
	:m=>["Natalia Volkova"], 
	:e=>["Andrey Tikhonov", "Michael Lukin", "Svetlana Kantola", "Nina Migachyova"])

org.push(:n=>"деп мобильные технологии",
	:m=>["Nikita Granko"], 
	:e=>["Nikolay Sokolov", "Dmitry Demin", "Viktor Dudenkov"])

org.push(:n=>"Microfocus",
	:m=>["Boris Lyubimov"], 
	:e=>["Yana Ivashevskaya", "Ilya Ivlev", "Alexey Malygin"])


org.push(:n=>"dbMotion",
	:m=>["Vadim Sabashny"], 
	:e=>["Alexey Kashkarov", "Anton Bakanov", "Dmitry Kichinsky", "Stanislav Sartasov", "Nickolay Penkrat"])

org.push(:n=>"ВЦКП Oracle",
	:m=>["Valerian Artemenko"], 
	:e=>["Vladlen Klimov", "Olga Simindeeva", "Sergei Prokator", "Igor Shevel", "Vera Haustova"])

org.push(:n=>"ВЦКП Client",
	:m=>["Vadim Sabashny", "Stanislav Sartasov"], 
	:e=>["Stanislav Sartasov", "Kirill Melentev"])

org.push(:n=>"ВЦКП Analytics",
	:m=>["Vadim Sabashny", "Valerian Artemenko"], 
	:e=>["Valerian Artemenko", "Sergey Naumov", "Matvei Vasetsov"])

org.push(:n=>"ВЦКП DBA",
	:m=>["Vadim Sabashny", "Valerian Artemenko"], 
	:e=>["Andrey Vakhutov", "Aleksandr Konkov"])

org.push(:n=>"ВЦКП DBA",
	:m=>["Vadim Sabashny", "Valerian Artemenko"], 
	:e=>["Andrey Vakhutov", "Aleksandr Konkov"])

org.push(:n=>"Area 9",
	:m=>["Kirill Churilin"], 
	:e=>["Gennady Gavrilov", "Vladimir Gorky", "Sergei Davydov", "Dmitry Erofeev",
	 "Maxim Zhuravlev", "Larisa Zelenkova", "Nikita Kovalenko", "Eugene Lukin", "Dmitry Luciv",
	 "Sergey Maksimov", "Eugeny Melamud"])

org.push(:n=>"Area 9",
	:m=>["Kirill Churilin", "Vadim Sabashny"], 
	:e=>["Nikolay Sokolov"])

org.push(:n=>"Area 9",
	:m=>["Kirill Churilin", "Boris Krivoshein"], 
	:e=>["Elena Fedotova"])

org.push(:n=>"Тойота",
	:m=>["Alexander Evdokimov", "Alexey Syrtsev"], 
	:e=>["Alisa Bakaeva", "Dmitri Zaporozhtsev", "Viktar Novikau", "Svetlana Polukhina", "Aleksandr Lapitcky",
		"Artyom Melnikov"])

org.push(:n=>"Тойота",
	:m=>["Kirill Churilin", "Alexander Evdokimov", "Alexey Syrtsev"], 
	:e=>["Igor Varfolomeev"])

org.push(:n=>"Тойота",
	:m=>["Kirill Churilin"], 
	:e=>["Alexander Evdokimov"])

org.push(:n=>"Тойота",
	:m=>["Kirill Churilin"], 
	:e=>["Alexey Syrtsev"])


org.push(:n=>"Viherio",
	:m=>["Alexander Evdokimov"], 
	:e=>["Maxim Prokoshin", "Dmitry Plyako"])

org.push(:n=>"33 друга",
	:m=>["Dmitry Kichinsky"], 
	:e=>["Oleg Dolgopolov", "Olga Ananieva"])

org.push(:n=>"33 друга",
	:m=>["Alexander Evdokimov"], 
	:e=>["Olga Ananieva"])

org.push(:n=>"33 друга",
	:m=>["Alexey Syrtsev"], 
	:e=>["Olga Ananieva"])

org.push(:n=>"Кот-Пират",
	:m=>["Alexander Pavlov"], 
	:e=>["Gennady Podolsky", "Pavel Golubev"])

org.push(:n=>"Кот-Пират",
	:m=>["Alexander Pavlov","Kirill Churilin"], 
	:e=>["Pavel Golubev"])

org.push(:n=>"Кот-Пират",
	:m=>["Vadim Sabashny","Kirill Churilin"], 
	:e=>["Alexey Kashkarov"])

org.push(:n=>"Кот-Пират",
	:m=>["Kirill Churilin"], 
	:e=>["Alexander Pavlov"])


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


