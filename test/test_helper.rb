require File.expand_path(File.dirname(__FILE__) + '/../../../test/test_helper')
require "paperclip/matchers"
# ruby user_profile_test.rb ; tail -f ../../../../log/test.log

# ActiveRecord::Fixtures.create_fixtures(File.dirname(__FILE__) + '/fixtures/',
#                                        [:user_profiles])


ActiveRecord::Fixtures.create_fixtures(File.dirname(__FILE__) + '/fixtures/', 
                            [:user_profile_t])

def UserProfile.generate!(attributes={})
  userProfile = UserProfile.new(attributes)
  userProfile.save!
end

