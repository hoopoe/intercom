# encoding: UTF-8
namespace :redmine do
  namespace :tercomin do

    task :create_groups => :environment do
      Group.create(:lastname => "hr")
      Group.create(:lastname => "lt-all")
      Group.create(:lastname => "lt-prj-tercomin-pm")
    end
  end
end