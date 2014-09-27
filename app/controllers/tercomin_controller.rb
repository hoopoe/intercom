require 'zip'

class TercominController < ApplicationController  
	before_filter :find_user_profile, :only => :show
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
    result_file_name = "#{@user.lastname}_#{@user.firstname}.docx"
    @user_profile = UserProfile.find_or_create_by_user_id(params[:id])      
    filename = template_tag("cv.docx", :plugin => 'tercomin')
    zf = Zip::File.new(filename)

    if @user_profile.respond_to? :data
      pd = JSON.parse(@user_profile.data)
      buffer = Zip::OutputStream.write_buffer do |out|
        zf.entries.each do |e|    
          if e.ftype == :directory
            out.put_next_entry(e.name)          
          else          
            out.put_next_entry(e.name)
            if (e.name == DOCUMENT_FILE_PATH)             
              doc = e.get_input_stream.read
              doc = doc.gsub("[Firstname]", @user.firstname)   
              doc = doc.gsub("[Lastname]", @user.lastname)
              doc = doc.gsub("[Position]", pd['position']) if pd['position'].present?
              doc = doc.gsub("[Summary]", pd['summary']) if pd['summary'].present?
              doc = doc.gsub("[Expertise]", pd['skills']) if pd['skills'].present?
              doc = doc.gsub("[Work_From_Year]", "2013")
              doc = doc.gsub("[Work_To_Year]", "2014")
              doc = doc.gsub("[Work_Name]", "latin-tercom")
              doc = doc.gsub("[Work_Project]", "LiftEye")
              doc = doc.gsub("[Work_Position]", "Developer")
              doc = doc.gsub("[Work_Resp]", "c++ dev")
              doc = doc.gsub("[Work_Summary]", "Working hard")
              doc = doc.gsub("[EDU_From_Year]", "2002")
              doc = doc.gsub("[EDU_To_Year]", "2008")
              doc = doc.gsub("[EDU_Summary]", "Spbu")
              doc = doc.gsub("[Certificates]", "MS")
              doc = doc.gsub("[Languages]", "intermediate")
              doc = doc.gsub("[Languages_Extra]", "Suomi primary")
              out.write doc        
            else
              out.write e.get_input_stream.read
            end      
          end
        end
      end
    end  
    buffer.rewind
    send_data( buffer.sysread, :filename => result_file_name )    
  end

  private
  DOCUMENT_FILE_PATH = "word/document.xml"

  def find_user_profile
    @user = User.find_by_id(params[:id])          
    raise ActiveRecord::RecordNotFound if params[:id] && @user.nil? && params[:id] != @user.id
  rescue ActiveRecord::RecordNotFound
    render_404
  end

  def template_tag(source, options={})
    if plugin = options.delete(:plugin)      
      source = "#{Rails.root}/public/plugin_assets/#{plugin}/reporting/#{source}"    
    end
    return source
  end
end
