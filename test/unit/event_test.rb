require File.expand_path('../../test_helper', __FILE__)

class EventTest < ActiveSupport::TestCase

  should "create" do    
    Event.delete_all
    event = Event.new(:id =>1, :name => "Attestation")
    event.save!
    assert_equal 1, Event.count(:all, :conditions => {:name => 'Attestation'})
  end
end
