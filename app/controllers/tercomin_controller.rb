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
    filename = template_tag("cv.docx", :plugin => 'tercomin')
    # send_data( data, :filename => "cv.txt" )    
    send_file filename, :disposition => 'attachment'
  end

private
  def template_tag(source, options={})
    if plugin = options.delete(:plugin)      
      source = "#{Rails.root}/public/plugin_assets/#{plugin}/images/#{source}"    
    end
    return source
  end
end
