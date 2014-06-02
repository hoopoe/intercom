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
      createUser("Vladimir", "Kocheryzhkin")
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
          firstN  = items[0].strip()
          lastN  = items[1].strip()
          imageName = "#{firstN} #{lastN}.png"
          user = User.find(:first, :conditions => ["firstname =? and lastname =?",firstN, lastN])
          if user.nil?      
            puts "User not found: "+ imageName                  
          else
            person = UserProfile.new
            person.skills     = items[4]
            person.user_id    = user.id            
            person.position   = items[2]
            person.summary    = items[3]
            person.birthday   = items[5]
            person.project    = items[6]
            imagePath = File.expand_path("../../../data/#{imageName}", __FILE__)
            if File.exists?(imagePath)
              file = File.open(imagePath)
              person.avatar = file
              file.close
            end
            person.save! 
            puts "."           
          end
        end
      else
        puts "File not exist"
      end      
    end

    task :check_profiles => :environment do
      puts "start...."
      @users = User.select("users.id, users.login, users.mail, users.firstname, users.lastname, user_profile_t.skills, user_profile_t.avatar_file_name avatar")
      .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")  

      ids = @users.all.map { |x| x.id }
      @profiles = UserProfile.where(:user_id => ids)
      
      for i in @users        
        if profile = @profiles.find_by_user_id(i)          
          i.avatar = profile.avatar_url
        end        
      end

      for i in @users
        puts i.avatar
      end
    end
  end
end
