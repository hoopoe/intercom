class UserEvent < ActiveRecord::Base
  self.table_name = "user_events_t" 
  include Redmine::SafeAttributes
  belongs_to :user
  validates :user, :presence => true

  belongs_to :event
  validates :event, :presence => true
end
