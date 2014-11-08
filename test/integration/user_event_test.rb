require File.expand_path('../../test_helper', __FILE__)


class Redmine::ApiTest::UserProfileTest < Redmine::ApiTest::Base  
  fixtures :users

  test "GET /tercomin/api/v1/user_profile.json should fail for not in HR group" do
    get '/tercomin/api/v1/user_event.json', credentials('admin')
   	assert_response 403	 
  end

end