require 'mime/types'
class Tercomin::Api::V1::UserProfileController < ApplicationController
  respond_to :json

  helper :sort
  include SortHelper
  
  before_filter :authorize_self_and_manager, :only => :update
  before_filter :is_self_or_last_event_manager, :only => :show

  accept_api_auth :index, :show, :update

  def index
    sort_init 'lastname', 'asc'
    # sort_update %w(lastname firstname login mail admin created_on last_login_on)
    sort_update %w(lastname)

    @offset, @limit = api_offset_and_limit
    # @limit = 4
    if (params[:page])
      @offset = @limit * (params[:page].to_i - 1)
    end

    users = User.select("users.id, users.login, users.mail, users.firstname,
     users.lastname, user_profile_t.avatar_url, user_profile_t.data")
    .joins("LEFT JOIN #{UserProfile.table_name} 
      ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")

    if (params[:criteria])
      criteria = params[:criteria]
      q = criteria.map{|s| "%#{s}%"}
      if q.length > 0
        where_clause = ""
        q.each_with_index do |i, index|
          if index == 0
            where_clause  = "LOWER(#{User.table_name}.firstname) LIKE LOWER('#{q[index]}') 
            or LOWER(#{User.table_name}.lastname) LIKE LOWER('#{q[index]}')"
          end
          where_clause = where_clause + 
          " or LOWER(#{UserProfile.table_name}.data) LIKE LOWER('#{q[index]}')"
        end
        users = users.where(where_clause)
      end
    end

    users = users
    .where("#{User.table_name}.status != 3")    
    .order(sort_clause)
    .limit(@limit)
    .offset(@offset)
    .all
    
    add_groups(users)
    set_avatars(users)

    @response = users.map{|i| i.attributes}
    respond_with @response
  end

  def show    
    if (params.has_key?(:id))
      if (params[:id] == "logged" && !User.current.logged?)
        respond_with "User is not logged", status: :unprocessable_entity
      else

        if @has_full_access
          users = User.select("users.id, users.login, users.mail, users.firstname, users.lastname,
           user_profile_t.data, user_profile_t.settings,
           user_profile_t.positions,
           user_profile_t.backgrounds,
           user_profile_t.avatar_url")
          .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")
        else
          users = User.select("users.id, users.login, users.mail, users.firstname, users.lastname,
           user_profile_t.avatar_url,
           user_profile_t.data, user_profile_t.settings")
          .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")
        end

        if (params[:id] == "logged")
          users = users.where("#{User.table_name}.id = (?)", User.current.id)
        else
          users = users.where("#{User.table_name}.id = (?)", params[:id])
        end

        if users.exists?
          set_avatars(users)
          u = users.first          
          @response = {:profile => u.attributes, :editable => authorize_self_and_manager(), :fullaccess => @has_full_access}
          respond_with @response
        else          
          render_403
        end

      end
    end
  end

  def update
    unless authorize_self_and_manager()
      render :text => 'Access denied.', :status => 401
      return
    end

    if (params[:id] == "logged" && !User.current.logged?)
      respond_with "User is not logged", status: :unprocessable_entity
    end

    if (params[:id] == "logged")
      @profile = UserProfile.find_or_create_by_user_id(User.current.id)
    else
      @profile = UserProfile.find_or_create_by_user_id(params[:id])
    end

    if(params.has_key?(:profile))
      #profile data
      if params[:profile][:data].present?
        if @profile.data.present?
          data = JSON.parse(@profile.data)
        else
          data = Hash.new
        end        
        data.merge!(JSON.parse(params[:profile][:data]));
        @profile.data = data.to_json
      end
      #profile settings
      if params[:profile][:settings].present?
        if @profile.settings.present?
          settings = JSON.parse(@profile.settings)
        else
          settings = Hash.new
        end      
        settings.merge!(JSON.parse(params[:profile][:settings]));
        @profile.settings = settings.to_json
      end
      #profile positions
      if params[:profile][:positions].present?       
        @profile.positions = params[:profile][:positions]
      end
      #profile backgrounds
      if params[:profile][:backgrounds].present?       
        @profile.backgrounds = params[:profile][:backgrounds]
      end
    end

    if(params.has_key?(:avatar))
      # user = User.find_by_id(@profile.user_id)
      # project = Project.find_by_identifier("tercomin") #todo: refactor
      # if(project.present?)
      #   @attachment = project.attachments.find_or_create_by_description("#{user.login}")
      #   @attachment.delete_from_disk()
      #   content = params[:avatar].split(',')
      #   @attachment.file = Base64.strict_decode64(content.pop)
      #   @attachment.author = User.current
        
      #   @attachment.container = project
      #   @attachment.content_type = content.pop[/\:(.*?);/,1] #data:image/png;base64,iVBOR
      #   @attachment.filename = "#{user.login}.#{MIME::Types[@attachment.content_type].first.extensions.first }" 
      #   @attachment.description ="#{user.login}"
      #   saved = @attachment.save
      # end
    end

    if @profile.save
      respond_with @profile
    else
      render_validation_errors(@profile) 
    end
    
  end

  private

  def is_in_system_group    
    if !User.current.logged?
      return false
    end
    currentGroups = User.current.groups.map{ |o| o.lastname }
    ig = currentGroups & ['hr', 'lt-prj-tercomin-pm', 'lt-prj-tercom-website-pm']    
    return ig.any?
  end

  def is_self_or_last_event_manager # TODO: refactor we need groups page. extract them from Event
    @has_full_access = is_in_system_group()
    if (params[:id] == "logged" || User.current.id == params[:id].to_i)
      @has_full_access = true;        
    else      
      e = Event.where("events_t.groups IS NOT NULL").last
      if e.present? && e.groups.present?
        groups = JSON.parse(e.groups)
        for i in groups          
          if i['m'].keys().include?(User.current.id.to_s)            
            if i['e'].keys().include?(params[:id])
              @has_full_access = true;
            end
          end          
        end        
      end      
    end
  end

  def authorize_self_and_manager
    if params.has_key?(:id)
      if params[:id] == "logged"
        return true
      else
        if User.current.id == params[:id].to_i
          return true
        else
          return is_in_system_group()
        end
      end
    else
      return is_in_system_group()
    end
  end

  def set_avatars(users)
    ids = users.map { |x| x.id }
    if project = Project.find_by_identifier("tercomin") #todo: refactor
      for i in users
        # if att = project.attachments.find_by_description(i.login)
        #   i.avatar_url = "attachments/download/#{att.id}/#{att.filename}" 
        # else
          i.avatar_url = "noavatar" #don't have profile at all
        # end
      end
    end
  end

  def add_groups(users)
    users_groups = get_users_groups(users)
    for i in users
      i['events'] = users_groups[i.id] #todo: refactor
    end
  end

  def get_users_groups(users)
    t = Hash.new
    user_groups = UserEvent.select("events_t.name, user_events_t.user_id, user_events_t.event_id")
      .joins("INNER JOIN #{Event.table_name} 
        ON #{UserEvent.table_name}.event_id = #{Event.table_name}.id")
      .group(:user_id, :event_id, :name)
      .all    
    for i in user_groups     
      if t[i.user_id].blank?
          t[i.user_id] = []
      end
      t[i.user_id] << {:ueid => i.user_id.to_s + '_' + i.event_id.to_s, :name => i.name}
    end
    return t
  end
end
