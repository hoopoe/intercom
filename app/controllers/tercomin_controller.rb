require 'zip' #ms word generation
require 'nokogiri' #ms word generation

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
      begin
        pd = JSON.parse(@user_profile.data)
      rescue  
        puts 'parse profile error'  
      end  
      begin
        positions = JSON.parse(@user_profile.positions)
      rescue  
        puts 'parse positions error'  
      end  
      begin
        background = JSON.parse(@user_profile.backgrounds)
      rescue  
        puts 'parse background error'  
      end  
      buffer = Zip::OutputStream.write_buffer do |out|
        zf.entries.each do |e|    
          if e.ftype == :directory
            out.put_next_entry(e.name)          
          else          
            out.put_next_entry(e.name)
            if (e.name == DOCUMENT_FILE_PATH)             
              tmp = e.get_input_stream.read
              doc = Nokogiri::XML(tmp)
              node = doc.at('//w:t[contains(., "Professional experience")]')
              tableNode = node.parent.parent.next_element
              tableRowsNodes = tableNode.xpath('.//w:tr')
              
              if positions && !positions.empty?                
                tableRowsNodes.remove
                positions.each do |i|                  
                  for j in tableRowsNodes do
                    row = j.clone
                    replaceNodeContent(row, "[Work_From_Year]", i['from'])
                    replaceNodeContent(row, "[Work_To_Year]", i['to'])
                    replaceNodeContent(row, "[Work_Name]", i['companyName'])
                    replaceNodeContent(row, "[Work_Project]", i['project'])
                    replaceNodeContent(row, "[Work_Position]", i['position'])
                    replaceNodeContent(row, "[Work_Resp]", i['resp'])                    
                    tableNode.add_child(row)
                  end
                end
              end

              nodeEdu = doc.at('//w:t[contains(., "Educational background")]')
              tableEduNode = nodeEdu.parent.parent.next_element
              tableEduRowsNodes = tableEduNode.xpath('.//w:tr')
              
              if background && !background.empty?
                tableEduRowsNodes.remove
                background.each do |i|                  
                  for j in tableEduRowsNodes do
                    row = j.clone
                    replaceNodeContent(row, "[EDU_From_Year]", i['from'])
                    replaceNodeContent(row, "[EDU_To_Year]", i['to'])                    
                    replaceNodeContent(row, "[EDU_Summary]", i['name'])
                    tableNode.add_child(row)
                  end
                end
              end

              doc = doc.inner_html
              doc = doc.gsub("[Firstname]", @user.firstname)   
              doc = doc.gsub("[Lastname]", @user.lastname)
              doc = doc.gsub("[Position]", pd['position']) if pd['position'].present?
              if pd
                if pd['summary'].present?
                  tmp = Nokogiri::HTML(pd['summary'].gsub(/>\s+</, "><"))                
                  doc = doc.force_encoding("UTF-8").gsub("[Summary]", tmp.xpath("//text()").to_s)
                end
                if pd['skills'].present?
                  tmp = Nokogiri::HTML(pd['skills'].gsub(/>\s+</, "><"))                
                  doc = doc.force_encoding("UTF-8").gsub("[Skills]", tmp.xpath("//text()").to_s)
                end

                if pd['coureses'].present?
                  tmp = Nokogiri::HTML(pd['coureses'].gsub(/>\s+</, "><"))                
                  doc = doc.force_encoding("UTF-8").gsub("[Certificates]", tmp.xpath("//text()").to_s)
                end
                if pd['english_lvl'].present?                  
                  tmp = Nokogiri::HTML(pd['english_lvl'].gsub(/>\s+</, "><"))                
                  doc = doc.force_encoding("UTF-8").gsub("[EnglishLVL]", tmp.xpath("//text()").to_s)
                end
                if pd['extra_languages'].present?                  
                  tmp = Nokogiri::HTML(pd['extra_languages'].gsub(/>\s+</, "><"))                
                  doc = doc.force_encoding("UTF-8").gsub("[Languages_Extra]", tmp.xpath("//text()").to_s)
                end
              end
            
              # doc = doc.gsub("[Certificates]", "MS")
              # doc = doc.gsub("[Languages]", "intermediate")
              # doc = doc.gsub("[Languages_Extra]", "Suomi primary")
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

  def replaceNodeContent(node, content, newcontent)
    criteria = './/w:t[contains(., "%s")]' % content
    item =node.at(criteria)
    item.content = item.content.gsub("#{content}", "#{newcontent}") if item
  end
end
