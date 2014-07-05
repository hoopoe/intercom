require File.expand_path(File.dirname(__FILE__) + '/../../../test/test_helper')
require "paperclip/matchers"
# ruby user_profile_test.rb ; tail -f ../../../../log/test.log


def UserProfile.generate!(attributes={})
  userProfile = UserProfile.new(attributes)
  userProfile.save!
end

