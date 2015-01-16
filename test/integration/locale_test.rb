require File.expand_path('../../test_helper', __FILE__)

class Redmine::ApiTest::LocaleTest < Redmine::ApiTest::Base
	fixtures :users
	def setup
		@controller = Tercomin::Api::V1::LocaleController.new
		Setting.rest_api_enabled = '1'
	end

	test "GET /tercomin/api/v1/locale.json should fail for users not from lt-prj-tercomin-pm" do
		get '/tercomin/api/v1/locale.json', {}, credentials('jsmith')
		assert_response 403
	end

end