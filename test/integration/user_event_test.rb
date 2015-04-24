require File.expand_path('../../test_helper', __FILE__)

class Redmine::ApiTest::UserEventTest < Redmine::ApiTest::Base  
  fixtures :users

  def setup
    @controller = Tercomin::Api::V1::UserEventController.new
    Setting.rest_api_enabled = '1'
    g = Group.generate!(:name => 'lt-all')  
    u = User.find_by_login('admin')   
    g.users << u
  end

  #todo check
  # test "get_user_event_should_fail_for_not_HR" do
  #   get '/tercomin/api/v1/user_event.json', {}, credentials('admin')
  #   assert_response 403
  # end

end