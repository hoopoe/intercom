require File.expand_path('../../test_helper', __FILE__)

class DropSkillsCreateUserProfileTest < ActiveSupport::TestCase

  should "create" do
    user = User.generate!(:firstname => 'First Test User')
    userProfile = UserProfile.generate!(:user_id => user.id,
                                        :skills => 'c#, c++, java')
    assert_equal 1, User.count(:all, :conditions => {:firstname => 'First Test User'})
  end

  should "search" do
    u1 = User.generate!(:firstname => 'u1')
    u1P = UserProfile.generate!(:user_id => u1.id,
                                :data => "{'skills':'c#, c++, java'}")    
    u2 = User.generate!(:firstname => 'u2')
    u2P = UserProfile.generate!(:user_id => u2.id,
                                :data => "{'skills':'java'}")
    u3 = User.generate!(:firstname => 'u3')
    u3P = UserProfile.generate!(:user_id => u3.id,
                                :data => "{'skills':'c++'}") 

    q = "%java%"
    users = User
        .select("users.firstname")
        .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")
        .where("LOWER(#{UserProfile.table_name}.data) LIKE LOWER(?)", q)
        .all

    assert_equal 2, users.count
  end
end
