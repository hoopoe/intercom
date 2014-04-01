require File.expand_path(File.dirname(__FILE__) + '/../../../test/test_helper')

def UserProfile.generate!(attributes={})
  userProfile = UserProfile.new(attributes)
  userProfile.save!
  userProfile
end
