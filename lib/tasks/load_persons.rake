require 'faker'

namespace :redmine do
  namespace :intercom do

  	def loading(filename)
  		arr = Array.new(7)
  		i = 0
      file = File.open(filename)
      str = file.readline
      #puts str.split(';')
      
    file.each do |line|
        value = line.split(";")
        value.each do |c|
        arr[i] = c
        puts arr[i]
        i = i + 1
   				end
   		@person = UserProfile.new
        @person.name = arr[0]
        @person.first_name = arr[1]
        @person.position = arr[2]
        @person.summary = arr[3]
        @person.skills = arr[4]
        @person.birthday = arr[5]
        @person.project = arr[6]
        @person.save
        i = 0
  		end
  		puts("File is loaded")
  	end
#далее не совсем понятно что 
task :reset_data => :environment do
		UserProfile.destroy_all
	  	User.destroy_all(:identity_url => "http://demo/");
		  loading("person.csv")
		end
  end
end