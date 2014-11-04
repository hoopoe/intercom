class Event < ActiveRecord::Base
  self.table_name = "events_t"
  unloadable
end
