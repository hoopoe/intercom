require 'faker'

namespace :redmine do
  namespace :intercom do

    def load(filename)
      file = File.open(filename)
      file.readline
      file.each do |line|
        value = line.split(";")
        # user = User.new
        # user.login = Faker::Internet.user_name
        # user.mail = Faker::Internet.email
        # user.firstname = value[0]
        # user.lastname = value[1]
        # user.identity_url = 'demo'
        # user.save!

        # puts(user.firstname)
        # puts(user.id)

        # user = User.find_by_mail(params[:mail].to_s)

        # @user = User.find(:first, :conditions => [ "firstname = ?", value[0], "lastname = ?", value[1]])
        # if @user
        #   person = UserProfile.new
        #   person.skills     = value[4]
        #   person.user_id    = @user.id
        #   person.name       = value[0]
        #   person.first_name = value[1]
        #   person.position   = value[2]
        #   person.summary    = value[3]
        #   person.birthday   = value[5]
        #   person.project    = value[6]
        #   person.save!
        # else
        #   puts "user not found"
        # end
      end
    end

    task :load_profiles => :environment do      
      # UserProfile.destroy_all(conditions = nil)
      # load("person.csv")
    end
  end
end
