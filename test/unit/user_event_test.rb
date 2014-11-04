require File.expand_path('../../test_helper', __FILE__)

class UserEventTest < ActiveSupport::TestCase

  should "create" do    
    ue = UserEvent.new(:body => "test")
    
    e = Event.new(:body => "ev body")
    e.save!
    u = User.find_by_login('admin');

    ue.user = u
    ue.event = e
    ue.body = e.body

    ue.save!    
    assert_equal 1, UserEvent.count(:all, :conditions => {:body => 'ev body'})
  end
end
