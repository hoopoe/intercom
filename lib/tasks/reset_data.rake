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

    def loading(filename)
      arr = Array.new(7)
      i = 0
      file = File.open(filename)
      str = file.readline      
      id = 0
      file.each do |line|
        value = line.split(";")
        value.each do |c|
          arr[i] = c
          i = i + 1
        end
        @person = UserProfile.new
        @person.skills = arr[4]
        @person.user_id = id+1
        @person.name = arr[0]
        @person.first_name = arr[1]
        @person.position = arr[2]
        @person.summary = arr[3]
        @person.birthday = arr[5]
        @person.project = arr[6]
        @person.save
        i = 0
      end      
    end

    task :reset_data => :environment do      
      UserProfile.destroy_all
      User.destroy_all(:identity_url => "http://demo/");      
      puts("Start loading...")
      loading("person.csv")
      puts("Finish loading...")

      26.times do
        generateNewUser()
      end
    end
  end
end
