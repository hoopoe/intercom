require File.expand_path('../../test_helper', __FILE__)

class DropSkillsCreateUserProfileTest < ActiveSupport::TestCase

  should "create" do
    user = User.generate!(:firstname => 'First Test User')
    Rails::logger.debug user
    userProfile = UserProfile.generate!(:user_id => user.id,
                                        :skills => 'c#, c++, java')
    Rails::logger.debug userProfile
    assert_equal 1, User.count(:all, :conditions => {:firstname => 'First Test User'})
  end


  should "search" do
    u1 = User.generate!(:firstname => 'u1')
    u1P = UserProfile.generate!(:user_id => u1.id,
                                :skills => 'c#, c++, java')
    u2 = User.generate!(:firstname => 'u2')
    u2P = UserProfile.generate!(:user_id => u2.id,
                                :skills => 'c++')
    u3 = User.generate!(:firstname => 'u3')
    u3P = UserProfile.generate!(:user_id => u3.id,
                                :skills => 'java')    
    profiles = UserProfile.arel_table
    q = 'java'    
    assert_equal 2, UserProfile.where(profiles[:skills].matches("%#{q}%")).count
  end
end
