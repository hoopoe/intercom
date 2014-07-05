class Api::UserProfileController < ApplicationController
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
    .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")
    
    # Rails.logger.info params[:criteria]
    
    if (params[:criteria])
      criteria = params[:criteria]
      q = criteria.map{|s| "%#{s}%"}
      users = users.where("LOWER(#{UserProfile.table_name}.data) LIKE LOWER(?)", q)
    end  
    users = users
      .order(sort_clause)
      .limit(@limit)
      .offset(@offset)
      .all    

    set_avatars(users)
    respond_with users    
  end

  def show    
    if (params.has_key?(:id))          
      if (params[:id] == "logged" && !User.current.logged?)        
        respond_with "User is not logged", status: :unprocessable_entity      
      end

      users = User.select("users.id, users.login, users.mail, users.firstname,
       users.lastname, user_profile_t.data,
       user_profile_t.avatar_file_name avatar_url")
      .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")

      if (params[:id] == "logged")
        users = users.where("#{User.table_name}.id = (?)", User.current.id)
      else
        users = users.where("#{User.table_name}.id = (?)", params[:id])
      end
      
      if users.exists?
        set_avatars(users)
        respond_with users.first
      else
        respond_with User.find_by_id(id)
      end  
    end   
  end

  def update
    if (params[:id] == "logged" && !User.current.logged?)        
      respond_with "User is not logged", status: :unprocessable_entity      
    end

    if (params[:id] == "logged")
      profile = UserProfile.find_or_create_by_user_id(User.current.id)
    else  
      profile = UserProfile.find_or_create_by_user_id(params[:id])
    end

    if(params.has_key?(:user))
      data = JSON.parse(profile.data)
      if params[:user][:skills].present?
        data['skills'] = params[:user][:skills]
      end
      if params[:user][:position].present?
        data['position'] = params[:user][:position]
      end
      if params[:user][:summary].present?
        data['summary'] = params[:user][:summary]
      end
      if params[:user][:birthday].present?
        data['birthday'] = params[:user][:birthday]
      end
      if params[:user][:project].present?
        data['project'] = params[:user][:project]
      end
      profile.data = data.to_json     
    end  

    if(params.has_key?(:avatar))
      user = User.find_by_id(params[:id])
      StringIO.open(Base64.strict_decode64(params[:avatar].split(',').pop)) do |data|
        data.class.class_eval { attr_accessor :original_filename, :content_type }
        # data.original_filename = "#{user.lastname}_#{user.firstname}.png"
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

  def authorize_self_and_manager
    if params.has_key?(:id)
      if params[:id] == "logged"
        allowed = true
      else
        Rails.logger.info "here"
        if User.current.id == params[:id].to_i
          allowed = true
        else
          allowed = User.current.allowed_to?(:update_profile, nil, :global => true)
        end
      end
    else
      allowed = User.current.allowed_to?(:update_profile, nil, :global => true)
    end

    if allowed
      true
    else
        deny_access
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
end
