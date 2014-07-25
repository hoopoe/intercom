class TercominController < ApplicationController  
	
  respond_to :html

  def index   
  	@tercomInTheme = "default"
  	if User.current.logged?
  		profile = UserProfile.find_by_user_id(User.current.id)
  		if UserProfile.exists?(profile)
  			if profile.settings.present?
		        settings = JSON.parse(profile.settings)
		        if settings["theme"] == "bootstrap"
	  				@tercomInTheme = "bootstrap"
	  			end
		    end
  		end
  	end
  end
end
