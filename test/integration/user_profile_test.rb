require File.expand_path('../../test_helper', __FILE__)
# require paperclip

class Redmine::ApiTest::UserProfileTest < Redmine::ApiTest::Base
	def setup
		@controller = Api::UserProfileController.new
	end

	def test_api_offset_and_limit_without_params
		assert_equal [0, 25], @controller.api_offset_and_limit({})
    # Rails::logger.info @controller.api_offset_and_limit({})
	end
	
	context "with offset and limit" do
      should "use the params" do        
        get '/intercom/api/v1/user_profile.json?offset=2&limit=3'
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
end