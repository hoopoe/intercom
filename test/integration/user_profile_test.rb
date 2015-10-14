require File.expand_path('../../test_helper', __FILE__)

class Redmine::ApiTest::UserProfileTest < Redmine::ApiTest::Base  
  fixtures :users
    
  def setup
    @controller = Tercomin::Api::V1::UserProfileController.new
    Setting.rest_api_enabled = '1'
    g = Group.generate!(:name => 'lt-all')  
    u = User.find_by_login('admin')   
    g.users << u
  end

  def test_api_offset_and_limit_without_params
    assert_equal [0, 25], @controller.api_offset_and_limit({})    
  end

  test "use the params" do
    get '/tercomin/api/v1/user_profile.json?offset=2&limit=3', {}, credentials('admin')
    assert_equal 2, assigns(:offset)
    assert_equal 3, assigns(:limit)
  end
  
  test "get_profiles" do    
    get '/tercomin/api/v1/user_profile.json', {}, credentials('admin')
    assert_response :success
    assert_equal 'application/json', response.content_type
    profiles = MultiJson.load(response.body)
    assert_kind_of Array, profiles
  end


  test "get_admin_profile" do    
    get '/tercomin/api/v1/user_profile/1.json', {}, credentials('admin')
    assert_response :success
    profiles = MultiJson.load(response.body)    
    assert_equal 'admin', profiles["profile"]["login"]
  end

  test "update_profile_require_authentication" do
    put '/tercomin/api/v1/user_profile/1.json', {
        :id => 1,
        :user => {
          :data => '{"summary": "test summary"}'}
        }
        
    assert_response 401
  end

end
