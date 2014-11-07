class Tercomin::Api::V1::UserProfileController < ApplicationController
  respond_to :json

  helper :sort
  include SortHelper

  accept_api_auth :index, :show, :update
  before_filter :authorize_self_and_manager, :only => :update

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
     users.lastname, user_profile_t.avatar_file_name avatar_url, user_profile_t.data")
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

    ids = users.map{|i| i.id}
    user_groups = get_users_groups(ids)

    set_avatars(users)
    respond_with users
    # respond_with user_groups
  end

  def show
    if (params.has_key?(:id))
      if (params[:id] == "logged" && !User.current.logged?)
        respond_with "User is not logged", status: :unprocessable_entity
      else
        users = User.select("users.id, users.login, users.mail, users.firstname, users.lastname,
         user_profile_t.data, user_profile_t.settings,
         user_profile_t.positions,
         user_profile_t.backgrounds,
         user_profile_t.avatar_file_name avatar_url")
        .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")

        if (params[:id] == "logged")
          users = users.where("#{User.table_name}.id = (?)", User.current.id)
        else
          users = users.where("#{User.table_name}.id = (?)", params[:id])
        end

        if users.exists?
          set_avatars(users)
          u = users.first          
          @response = {:profile => u.attributes, :editable => authorize_self_and_manager()}
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
      profile = UserProfile.find_or_create_by_user_id(User.current.id)
    else
      profile = UserProfile.find_or_create_by_user_id(params[:id])
    end

    if(params.has_key?(:profile))
      #profile data
      if params[:profile][:data].present?
        if profile.data.present?
          data = JSON.parse(profile.data)
        else
          data = Hash.new
        end        
        data.merge!(JSON.parse(params[:profile][:data]));
        profile.data = data.to_json
      end
      #profile settings
      if params[:profile][:settings].present?
        if profile.settings.present?
          settings = JSON.parse(profile.settings)
        else
          settings = Hash.new
        end      
        settings.merge!(JSON.parse(params[:profile][:settings]));
        profile.settings = settings.to_json
      end
      #profile positions
      if params[:profile][:positions].present?       
        profile.positions = params[:profile][:positions]
      end
      #profile backgrounds
      if params[:profile][:backgrounds].present?       
        profile.backgrounds = params[:profile][:backgrounds]
      end
    end

    if(params.has_key?(:avatar))
      user = User.find_by_id(profile.user_id)
      StringIO.open(Base64.strict_decode64(params[:avatar].split(',').pop)) do |data|
        data.class.class_eval { attr_accessor :original_filename, :content_type }
        data.original_filename = "#{user.login}.png"
        data.content_type = "image/png"
        profile.avatar = data
      end
    end

    if profile.save
      Rails.logger.info "saved"
    else
      Rails.logger.info "failed to save"
    end

    respond_with profile
  end

  private
  def is_inspecial_group    
    if !User.current.logged?
      return false
    end
    currentGroups = User.current.groups.map{ |o| o.lastname }
    ig = currentGroups & ['hr', 'lt-prj-tercomin-pm', 'lt-prj-tercom-website-pm']  
    return ig.any?
  end

  def authorize_self_and_manager
    if params.has_key?(:id)
      if params[:id] == "logged"
        allowed = true
      else
        if User.current.id == params[:id].to_i
          allowed = true
        else
          allowed = User.current.allowed_to?(:update_profile, nil, :global => true) | is_inspecial_group()
        end
      end
    else
      allowed = User.current.allowed_to?(:update_profile, nil, :global => true) | is_inspecial_group()
    end

    if allowed
      true
    else
      false
    end
  end

  def set_avatars(users)
    #set paperclip absolute url for each record
    ids = users.map { |x| x.id }
    profiles = UserProfile.where(:user_id => ids).all
    for i in users
      if profile = profiles.detect{|p| p.user_id == i.id}
        i.avatar_url = profile.avatar_url
      else
        i.avatar_url = "noavatar" #don't have profile at all
      end
    end
  end

  def get_users_groups(ids)
    t = Hash.new
    user_groups = UserEvent.includes(:event)
    .where(:user_id => ids)
    .all    
    for i in user_groups       
        if t[i.user_id].blank?
            t[i.user_id] = []
        end
        t[i.user_id] << {i.event.id => i.event.name}
    end
    return t
  end
end
