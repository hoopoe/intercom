class UserEvent < ActiveRecord::Base
  self.table_name = "user_events_t" 
  include Redmine::SafeAttributes

  belongs_to :user#, class_name: "UserProfile", foreign_key: "user_id"
  validates :user, :presence => true

  belongs_to :event
  validates :event, :presence => true

  belongs_to :mgr, class_name: "User"#, foreign_key: "mgr_id"
end
