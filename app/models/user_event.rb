class UserEvent < ActiveRecord::Base
  self.table_name = "user_events_t" 
  include Redmine::SafeAttributes
  belongs_to :user
  validates :user, :presence => true

  belongs_to :event
  validates :event, :presence => true

  belongs_to :mgr, :class_name => "User"
  # validates :mgr, :presence => true

  # safe_attributes 'body'

end
