require File.expand_path('../../test_helper', __FILE__)

class EventTest < ActiveSupport::TestCase

  def test_new    
    Event.delete_all
    event = Event.new(:name => "Attestation")
    event.save!    
    assert_equal 1, Event.count(:all, :conditions => {:name => 'Attestation'})
  end
end
