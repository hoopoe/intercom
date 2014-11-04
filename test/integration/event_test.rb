require File.expand_path('../../test_helper', __FILE__)

class Redmine::ApiTest::EventTest < Redmine::ApiTest::Base	
	def setup
		@controller = Tercomin::Api::V1::EventController.new
		Setting.rest_api_enabled = '1'	
	end

	def test_api_offset_and_limit_without_params
		assert_equal [0, 25], @controller.api_offset_and_limit({})    
	end

	test "POST /tercomin/api/v1/event.json with valid parameters should fail for any not in pm group" do
		post '/tercomin/api/v1/event.json', {:event => {:name => 'Test'}}, credentials('admin')
		assert_response 403	 
	end

	test "POST /tercomin/api/v1/event.json with valid parameters should create the event" do		
		g = Group.new(:name => 'lt-prj-tercomin-pm')
     	assert g.save

    	u = User.find_by_login('admin');
    	g.users << u

	    assert_difference('Event.count') do
	      post '/tercomin/api/v1/event.json', {:event => {:name => 'Test'}}, credentials('admin')
	      assert_response :created
	      assert_equal 'application/json', response.content_type
	    end	    
	    event = Event.order('id DESC').first
	    assert_equal 'Test', event.name
	end
end