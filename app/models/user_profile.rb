class UserProfile < ActiveRecord::Base
  self.table_name = "user_profile_t"

  belongs_to :user

  def name
    self.user.name
  end

  def to_s
    "Name:#{self.name} Skills:#{self.skills}"
  end 
end
