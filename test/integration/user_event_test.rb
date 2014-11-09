require File.expand_path('../../test_helper', __FILE__)


class Redmine::ApiTest::UserEventTest < Redmine::ApiTest::Base  
	fixtures :users
	def setup
		@controller = Tercomin::Api::V1::UserEventController.new
		Setting.rest_api_enabled = '1'
	end

	test "GET /tercomin/api/v1/user_event.json should fail for not in HR group" do
		get '/tercomin/api/v1/user_event.json', credentials('admin')
		assert_response 403
	end

end