require File.expand_path('../../test_helper', __FILE__)
# require paperclip



class Redmine::ApiTest::UserProfileTest < Redmine::ApiTest::Base
  set_fixture_class :user_profile_t => UserProfile
  fixtures :users, :user_profile_t
    
  def setup
    @controller = Tercomin::Api::V1::UserProfileController.new
  end

  def test_api_offset_and_limit_without_params
    assert_equal [0, 25], @controller.api_offset_and_limit({})
    # Rails::logger.info @controller.api_offset_and_limit({})
  end

  context "with offset and limit" do
    should "use the params" do
      get '/tercomin/api/v1/user_profile.json?offset=2&limit=3'
      assert_equal 2, assigns(:offset)
      assert_equal 3, assigns(:limit)
    end
  end

  # context "with offset and limit" do
  #   should "return only 3 record" do
  #     get '/api/user_profile.json?offset=1&limit=3'
  #     json = ActiveSupport::JSON.decode(response.body)
  #     assert_equal 3, json.length
  #   end
  # end

  test "GET /tercomin/api/v1/user_profile.json should return profiles" do
    get '/tercomin/api/v1/user_profile.json'
    assert_response :success
    assert_equal 'application/json', response.content_type

    profiles = MultiJson.load(response.body)
    assert_kind_of Array, profiles
  end


  test "GET /tercomin/api/v1/user_profile/1.json should return admin profile" do
    get '/tercomin/api/v1/user_profile/1.json'
    assert_response :success

    profiles = MultiJson.load(response.body)
    # Rails.logger.info profiles
    # Rails.logger.info profiles["user"]

    assert_equal 'admin', profiles["user"]["login"]

  end

  # test "PUT /tercomin/api/v1/user_profile.json should require authentication" do
  #   get '/groups.json'
  #   assert_response 401
  # end


end
