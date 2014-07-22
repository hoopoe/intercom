require File.expand_path('../../test_helper', __FILE__)

class CreateAndSearchUserProfileTest < ActiveSupport::TestCase

  should "create" do    
    User.delete_all
    user = User.generate!(:firstname => 'First Test User')
    userProfile = UserProfile.generate!(:user_id => user.id, 
        :data => "{'skills':'c#, c++, java'}")
    assert_equal 1, User.count(:all, :conditions => {:firstname => 'First Test User'})
  end

  should "search" do
    User.delete_all
    UserProfile.delete_all

    u1 = User.generate!(:firstname => 'u1')
    u1P = UserProfile.generate!(:user_id => u1.id,
                                :data => "{'skills':'c#, c++, java'}")    
    u2 = User.generate!(:firstname => 'u2')
    u2P = UserProfile.generate!(:user_id => u2.id,
                                :data => "{'skills':'java'}")
    u3 = User.generate!(:firstname => 'u3')
    u3P = UserProfile.generate!(:user_id => u3.id,
                                :data => "{'skills':'c++'}") 

    criteria = []
    q = criteria.map{|s| "%#{s}%"}

    if q.length > 0 
        for index, i in q do
            if index == 0
                where_clause = "LOWER(#{UserProfile.table_name}.data) LIKE LOWER('#{q[index]}')"
            else
                where_clause = where_clause + 
                " or LOWER(#{UserProfile.table_name}.data) LIKE LOWER('#{q[index]}')"
            end
        end
    end
    
    users = User
        .select("users.firstname")
        .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")
        .where(where_clause)
        .all

    assert_equal 3, users.count
  end
end
