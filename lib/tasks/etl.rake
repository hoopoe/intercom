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

    task :load_profiles => :environment do
      UserProfile.destroy_all(conditions = nil)            
      filePath = File.expand_path('../../../data/person.csv', __FILE__)            
      if File.exists?(filePath)        
        file = File.open(filePath)
        file.readline
        file.each do |t|          
          items = t.split(";")
          firstN  = items[0]
          lastN  = items[1]
          user = User.find(:first, :conditions => ["firstname =? and lastname =?",firstN, lastN])
          if user.nil?      
            puts "User not found: "+ firstN                  
          else
            person = UserProfile.new
            person.skills     = items[4]
            person.user_id    = user.id            
            person.position   = items[2]
            person.summary    = items[3]
            person.birthday   = items[5]
            person.project    = items[6]
            person.save!            
          end
        end
      else
        puts "File not exist"
      end      
    end  
  end
end
