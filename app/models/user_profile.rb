class UserProfile < ActiveRecord::Base
  self.table_name = "user_profile_t"
  belongs_to :user

  attr_accessible :data, :settings, :positions, :user_id, :avatar  
  
  has_attached_file :avatar, :default_url => "noavatar"
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/  

  def avatar_url
    avatar.url
  end
end
