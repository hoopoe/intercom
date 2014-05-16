require 'faker'

namespace :redmine do
  namespace :intercom do
    
    def tload(filename)
      puts "load asdf"
    end

    task :test => :environment do
      # UserProfile.destroy_all(conditions = nil)
      # load("person.csv")
      puts "hi1"
    end
  end
end