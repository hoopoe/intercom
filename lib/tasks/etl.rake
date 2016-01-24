# encoding: UTF-8
require 'spreadsheet'

namespace :redmine do
  namespace :tercomin do

    def createUser(firstName = nil, lastName = nil)      
      user = User.new
      user.login = "#{lastName}_" + (0...2).map { (1..10).to_a[rand(10)] }.join
      user.mail = user.login + "@mail.com"
      if firstName.nil?
        user.firstname = "noname"
      else
        user.firstname = firstName
      end

      if lastName.nil?
        user.lastname = "noname"
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
            person.save!                  
          end
        end
      else
        puts "File not exist"
      end      
    end
  end
end
