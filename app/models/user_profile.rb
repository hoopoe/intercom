class UserProfile < ActiveRecord::Base
  self.table_name = "user_profile_t"
  belongs_to :user

  attr_accessible :data, :settings, :positions, :backgrounds, :user_id, :avatar_url
end
