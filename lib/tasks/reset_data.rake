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

   #   UserProfile.create!(:user_id => user.id,
                         # :skills => skills.sample(1 + rand(skills.count)).join(", "))
    end

    def loading(filename)
      file = File.open(filename)
      file.readline
      file.each do |line|
        value = line.split(";")
        user = User.new
        user.login = Faker::Internet.user_name
        user.mail = Faker::Internet.email
        user.firstname = value[0]
        user.lastname = value[1]
        user.identity_url = 'demo'
        user.save!

        puts(user.firstname)
        puts(user.id)

        person = UserProfile.new
        person.skills     = value[4]
        person.user_id    = user.id
        person.name       = value[0]
        person.first_name = value[1]
        person.position   = value[2]
        person.summary    = value[3]
        person.birthday   = value[5]
        person.project    = value[6]
        person.save!
      end
    end

    task :reset_data => :environment do      
      UserProfile.destroy_all(conditions = nil)
      User.destroy_all(:identity_url => "http://demo/")
      puts("Start loading...")
      loading("person.csv")
      puts("Finish loading...")

    end
  end
end
