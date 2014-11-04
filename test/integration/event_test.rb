require File.expand_path('../../test_helper', __FILE__)

class Redmine::ApiTest::CorpEventTest < Redmine::ApiTest::Base
	def setup
		@controller = Tercomin::Api::V1::EventController.new
	end

	def test_api_offset_and_limit_without_params
		assert_equal [0, 25], @controller.api_offset_and_limit({})    
	end	
end