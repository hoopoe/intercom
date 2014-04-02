require 'faker'

namespace :redmine do
  namespace :intercom do

  	def generateNewUser
  		skills = ["c++", "java", "c#", ".net", "c", "asp.net", "ruby", "python"]
  		user = User.new
	  	user.login = Faker::Internet.user_name
      	user.mail = Faker::Internet.email
     	user.firstname = Faker::Name.name
		user.lastname = Faker::Name.name
		user.identity_url = 'demo'
		user.save!

		UserProfile.create!(:user_id => user.id,
			:skills => skills.sample(1 + rand(skills.count)).join(", "))
  	end

	task :reset_data => :environment do
		UserProfile.destroy_all
	  	User.destroy_all(:identity_url => "http://demo/");
	  	26.times do
		  generateNewUser()
		end
	end
  end
end