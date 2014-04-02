require 'faker'

namespace :redmine do
  namespace :intercom do
  	def generateNewUser
  		user = User.new
	  	user.login = Faker::Internet.user_name
      	user.mail = Faker::Internet.email
     	user.firstname = Faker::Name.name
		user.lastname = Faker::Name.name
		user.identity_url = 'demo'
		user.save!
  	end

	task :reset_data => :environment do
	  	User.destroy_all(:identity_url => "http://demo/");
	  	26.times do
		  generateNewUser()
		end
	end
  end
end