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
end
