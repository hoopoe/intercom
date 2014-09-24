class TercominController < ApplicationController  
	
  respond_to :html

  def index   
  	@themeName = "default"
  	if User.current.logged?
  		profile = UserProfile.find_by_user_id(User.current.id)
  		if UserProfile.exists?(profile)
  			if profile.settings.present?
		        settings = JSON.parse(profile.settings)		        
	  				@themeName = settings["theme"]	  			
		    end
  		end
  	end
  end

  def show
    data = "generate word file"
    send_data( data, :filename => "cv.txt" )    
  end
end

