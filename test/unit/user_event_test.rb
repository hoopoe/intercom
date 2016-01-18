require File.expand_path('../../test_helper', __FILE__)

class UserEventTest < ActiveSupport::TestCase

  setup :create_user_event

  def teardown
    UserEvent.delete_all
    User.delete_all
    Event.delete_all
  end

  def test_new        
    assert_equal 1, UserEvent.count(:all, :conditions => {:body => 'ev body'})
  end

  def test_create_with_mgr
    UserEvent.delete_all
    ue = UserEvent.new(:body => "test")
    ue.user = @u
    ue.mgr = @u
    ue.event = @e
    ue.save!    
    assert_equal 1, UserEvent.count(:all, :conditions => {:mgr_id => @u.id})
  end

  def test_search_for_uid_eid_mgr
    ue = UserEvent.new(:body => "test 1")
    ue.user = @u
    ue.mgr = @u
    ue.event = @e
    ue.save!

    assert_equal "test 1", UserEvent.find_by_user_id_and_event_id_and_mgr_id(@u.id, @e.id, @u.id).body
    assert_equal "ev body", UserEvent.find_by_user_id_and_event_id_and_mgr_id(@u.id, @e.id, nil).body
  end

  def test_update
    @ue.body = "update"
    @ue.save!
    assert_equal "update", UserEvent.find_by_user_id_and_event_id_and_mgr_id(@u.id, @e.id, nil).body
  end

  def test_build_user_groups_map
    e1 = Event.create!(:body => "Red body", :name => "Red" )
    e2 = Event.create!(:body => "Blue body", :name => "Blue" )

    ue1 = UserEvent.create!(:user_id => @u.id, :event_id => e1.id,:body => e1.body)
    ue2 = UserEvent.create!(:user_id => @u.id, :event_id => e2.id,:body => e2.body)

    tmp = UserEvent.includes(:event).all    
    t = Hash.new
    for i in tmp       
        if t[i.user_id].blank?
            t[i.user_id] = []
        end
        t[i.user_id] << {i.event.id => i.event.name}
    end

    assert_equal 1, t.count
  end

  def test_join_profiles
    
    ue = UserEvent.new(:body => "test 1")
    ue.user = @u
    ue.mgr = @u
    ue.event = @e
    ue.save!

    UserProfile.create!(:user_id => @u.id, :data => "UP test")  
    
    # .select("user_events_t.body, user_profile_t.user_id, user_profile_t.data")
    t = UserEvent  
    .select("*")
    .joins("LEFT JOIN #{UserProfile.table_name} 
      ON #{UserEvent.table_name}.user_id = #{UserProfile.table_name}.user_id")
    .all    

    assert_equal 2, t.count
  end

  private
 
    def create_user_event
        @ue = UserEvent.new(:body => "test")
        @e = Event.new(:body => "ev body")
        @e.save!
        @u = User.new(:firstname => "test", :lastname => "test", :mail => "test@test.foo")
        @u.login = "test"
        @u.save!
        @u = User.find_by_login('test');
        @ue.user = @u
        @ue.event = @e
        @ue.body = @e.body
        @ue.save!
    end
end
