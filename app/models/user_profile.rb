class UserProfile < ActiveRecord::Base
  self.table_name = "user_profile_t"

  belongs_to :user
  #has_and_belongs_to_many :user_projects

  attr_accessible :avatar
  has_attached_file :avatar, :default_url => "noavatar"
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
  
  def to_s
    "Name: empty Skills:#{self.skills}"
  end 

  def avatar_url
    avatar.url
  end
end
