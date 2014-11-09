require File.expand_path('../../test_helper', __FILE__)

class UserEventTest < ActiveSupport::TestCase

  should "create" do    
    ue = UserEvent.new(:body => "test")
    
    e = Event.new(:body => "ev body")
    e.save!

    u = User.new(:firstname => "test", :lastname => "test", :mail => "test@test.foo")
    u.login = "test"
    u.save!
    u = User.find_by_login('test');

    ue.user = u
    ue.event = e
    ue.body = e.body

    ue.save!    
    assert_equal 1, UserEvent.count(:all, :conditions => {:body => 'ev body'})
  end

  should "create with mgr" do    
    ue = UserEvent.new(:body => "test")
    
    e = Event.new(:body => "ev body")
    e.save!

    u = User.new(:firstname => "test", :lastname => "test", :mail => "test@test.foo")
    u.login = "test"
    u.save!
    u = User.find_by_login('test');

    ue.user = u
    ue.mgr = u
    ue.event = e

    ue.save!    
    assert_equal 1, UserEvent.count(:all, :conditions => {:mgr_id => u.id})
  end

  should "search for uid eid mgr" do    
    e = Event.create!(:body => "ev body")

    u = User.new(:firstname => "test", :lastname => "test", :mail => "test@test.foo")
    u.login = "test"
    u.save!
    u = User.find_by_login('test');

    ue2 = UserEvent.new(:body => "test 2")
    ue2.user = u
    ue2.event = e
    ue2.save!

    ue1 = UserEvent.new(:body => "test 1")
    ue1.user = u
    ue1.mgr = u
    ue1.event = e
    ue1.save!

    assert_equal "test 1", UserEvent.find_by_user_id_and_event_id_and_mgr_id(u.id, e.id, u.id).body
    assert_equal "test 2", UserEvent.find_by_user_id_and_event_id_and_mgr_id(u.id, e.id, nil).body
  end

  should "update" do    
    e = Event.create!(:body => "ev body")

    u = User.new(:firstname => "test", :lastname => "test", :mail => "test@test.foo")
    u.login = "test"
    u.save!
    u = User.find_by_login('test');

    ue = UserEvent.new(:body => "test")
    ue.user = u
    ue.mgr = nil
    ue.event = e
    ue.save!

    # ue.update(body: "update")
    ue.body = "update"
    ue.save!

    assert_equal "update", UserEvent.find_by_user_id_and_event_id_and_mgr_id(u.id, e.id, nil).body
  end

  should "build user groups map" do
    u = User.new(:firstname => "test", :lastname => "test", :mail => "test@test.foo")    
    u.login = "test"
    u.save!
    e1 = Event.create!(:body => "Red body", :name => "Red" )
    e2 = Event.create!(:body => "Blue body", :name => "Blue" )

    ue1 = UserEvent.create!(:user_id => u.id, :event_id => e1.id,:body => e1.body)
    ue2 = UserEvent.create!(:user_id => u.id, :event_id => e2.id,:body => e2.body)

    tmp = UserEvent.includes(:event).all    
    t = Hash.new
    for i in tmp       
        if t[i.user_id].blank?
            t[i.user_id] = []
        end
        t[i.user_id] << {i.event.id => i.event.name}
    end

    assert_equal 1, t.count
    # puts t.to_json
  end
end
