class UserProfile < ActiveRecord::Base
  self.table_name = "user_profile_t"

  belongs_to :user
  #has_and_belongs_to_many :user_projects
  
  def to_s
    "Name: empty Skills:#{self.skills}"
  end 
end
