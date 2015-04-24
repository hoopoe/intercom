require File.expand_path(File.dirname(__FILE__) + '/../../../test/test_helper')
# ActiveRecord::Fixtures.create_fixtures(File.dirname(__FILE__) + '/fixtures/', 
#                             [:user_profile_t])

def UserProfile.generate!(attributes={})
  up = UserProfile.new(attributes)
  up.save!
  up
end

def Group.generate!(attributes={})
  g = Group.new(attributes)
  g.save!
  g
end

