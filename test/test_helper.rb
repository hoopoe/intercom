require File.expand_path(File.dirname(__FILE__) + '/../../../test/test_helper')
ActiveRecord::Fixtures.create_fixtures(File.dirname(__FILE__) + '/fixtures/', 
                            [:user_profile_t])

def UserProfile.generate!(attributes={})
  userProfile = UserProfile.new(attributes)
  userProfile.save!
end

