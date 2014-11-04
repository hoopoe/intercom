class Event < ActiveRecord::Base
	include Redmine::SafeAttributes
  	self.table_name = "events_t" 

  	safe_attributes ':user_id', 'event_id', 'body', 'name'   
end
