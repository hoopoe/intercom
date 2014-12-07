# encoding: UTF-8
require 'faker'
require 'spreadsheet'

namespace :redmine do
  namespace :tercomin do

    def createUser(firstName = nil, lastName = nil)      
      user = User.new
      user.login = Faker::Bitcoin.address
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
      user.password = 'password'
      user.password_confirmation = 'password'
      user.identity_url = 'demo'
      user.save!
    end

    task :load_users => :environment do
      User.destroy_all(:identity_url => "http://demo/")
      filePath = File.expand_path('../../../data/person.xls', __FILE__)
      if File.exists?(filePath)                
        file = Spreadsheet.open(filePath)
        sheet = file.worksheet(0)
        sheet.rows.each_with_index do |t,i|

          if (i == 0)
            next; # skip header
          end

          if (i > 150) #limit number of employees 
            break 
          end

          if (t[0]) # has first name
            firstname = t[0].gsub(/\s+/, "")
            lastname = t[1].gsub(/\s+/, "")
            createUser(firstname, lastname)
          else 
              puts "Can't process: ", i
          end

        end
      end
    end  

    task :load_profiles => :environment do
      UserProfile.destroy_all(conditions = nil)            
      filePath = File.expand_path('../../../data/person.xls', __FILE__)
      if File.exists?(filePath)         
        file = Spreadsheet.open(filePath)
        sheet = file.worksheet(0)
        sheet.rows.each_with_index do |t,i|  

          if (i == 0)
            next; # skip header
          end

          if (i > 150) #limit number of employees 
            break 
          end

          if (t[0]) # has first name
            firstname = t[0].gsub(/\s+/, "")
            lastname = t[1].gsub(/\s+/, "")
            unless t[3].nil? #FIO ru
              fio = t[3].split(' ')
              lastnameRu = fio[0]
              firstnameRu = fio[1]
            end
          end
                   
          imageName = "#{lastname} #{firstname}.jpg"
          user = User.find(:first, :conditions => ["firstname =? and lastname =?", firstname, lastname])
          if user.nil?      
            puts "User not found: #{i}"
          else
            person = UserProfile.new
            person.user_id    = user.id      
            data = {
              'firstnameRu' => firstnameRu,
              'lastnameRu' => lastnameRu,
              'position' => t[4],
              'dep' => t[5],
              'office' => t[6],
              'project' => t[7],
              'summary' => t[8],
              'skills' => t[9],
              'room_number' => t[10],
              'project_extra' => t[11],
              'birthday' => t[12]
            }
            person.data = data.to_json     
            settingsData = {
              'theme' => t[13]
            }                 
            person.settings = settingsData.to_json

            imagePath = File.expand_path("../../../data/#{imageName}", __FILE__)
            if File.exists?(imagePath)
              if Gem.win_platform?
                #paperclip not working on windows
              else
                file = File.open(imagePath)
                person.avatar = file
                file.close
              end
            else
              puts "image not found #{imageName}" 
            end
            person.save!                  
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
