require 'faker'

namespace :redmine do
  namespace :intercom do

    def createUser(firstName = nil, lastName = nil)
      user = User.new
      user.login = Faker::Internet.user_name
      user.mail = Faker::Internet.email
      if firstName.nil?
        user.firstname = Faker::Name.name
      else
        user.firstname = firstName
      end

      if lastName.nil?
        user.lastname = Faker::Name.name
      else
        user.lastname = lastName
      end
      user.identity_url = 'demo'
      user.save!
    end

    task :generate_fake_users => :environment do      
      User.destroy_all(:identity_url => "http://demo/")
      11.times do |t|
         createUser()
      end
      createUser("Anton", "Bakanov")
      createUser("Elena I.", "Kicherova")
      createUser("Ivan", "Bogdanyuk")
      createUser("Vladimir", "Kocheryzhkin ")
      createUser("Anton", "Korobeynikov")
    end
  end
end