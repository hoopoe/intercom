class Api::UserProfileController < ApplicationController
  respond_to :json

  helper :sort
  include SortHelper



  # accept_api_auth :update
  # before_filter :authorize
  # before_filter :authorize#, :except => [:index, :show]
  # skip_before_filter :verify_authenticity_token
  accept_api_auth :index, :show, :update

  def index    
    sort_init 'lastname', 'asc'
    # sort_update %w(lastname firstname login mail admin created_on last_login_on)
    sort_update %w(lastname)

    Rails.logger.info User.current

    @offset, @limit = api_offset_and_limit
    # @limit = 4
    if (params[:page])
      @offset = @limit * (params[:page].to_i - 1)
    end

    if (params[:skills])
      skills = params[:skills]
      q = skills.map{|s| "%#{s}%"}

      @users = User.select("users.id, users.login, users.mail, users.firstname,
       users.lastname, user_profile_t.skills,
       user_profile_t.avatar_file_name avatar_url,
       user_profile_t.position,
       user_profile_t.summary,
       user_profile_t.birthday,
       user_profile_t.project")
      .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")
      .where("LOWER(#{UserProfile.table_name}.skills) LIKE LOWER(?)", q)
      .order(sort_clause)
      .limit(@limit)
      .offset(@offset)
      .all

      set_avatars(@users)
      respond_with @users
    else
      @users = User.select("users.id, users.login, users.mail, users.firstname,
       users.lastname, user_profile_t.skills,
       user_profile_t.avatar_file_name avatar_url,
       user_profile_t.position,
       user_profile_t.summary,
       user_profile_t.birthday,
       user_profile_t.project")
      .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")
      .order(sort_clause)
      .limit(@limit)
      .offset(@offset)
      .all

      set_avatars(@users)
      respond_with @users
    end
  end

  def show    
    if (params[:id].to_i < 0)
      Rails.logger.info "todo: redirect to login page if not logged"
      if User.current.logged?
        # @users = User.select("users.id, users.login, users.mail, users.firstname,
        # users.lastname, user_profile_t.skills,
        # user_profile_t.avatar_file_name avatar_url,
        # user_profile_t.position,
        # user_profile_t.summary,
        # user_profile_t.birthday,
        # user_profile_t.project")
        # .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")
        # .where("#{User.table_name}.id = (?)", User.current.id)

        # set_avatars(@users)
        
        # user.id = User.current.id
        respond_with User.current
      else
        # Rails.logger.info User.current.id
        respond_with nil, status: :unprocessable_entity
      end
    else
      @users = User.select("users.id, users.login, users.mail, users.firstname,
       users.lastname, user_profile_t.skills,
       user_profile_t.avatar_file_name avatar_url,
       user_profile_t.position,
       user_profile_t.summary,
       user_profile_t.birthday,
       user_profile_t.project")
      .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")
      .where("#{User.table_name}.id = (?)", params[:id])
      
      if @users.exists?
        set_avatars(@users)
        respond_with @users.first
      else
        respond_with User.find_by_id(params[:id])
      end
    end      
  end

  def update
    profile = UserProfile.find_or_create_by_user_id(params[:id])

    if(params.has_key?(:user))
      profile.skills = params[:user][:skills]
      profile.summary = params[:user][:summary]
    end

    # if(params.has_key?(:skills))
    #   profile.skills = params[:skills]  
    # end

    if(params.has_key?(:avatar))
      user = User.find_by_id(params[:id])
      StringIO.open(Base64.strict_decode64(params[:avatar].split(',').pop)) do |data|
        data.class.class_eval { attr_accessor :original_filename, :content_type }
        data.original_filename = "#{user.lastname}_#{user.firstname}.png"
        data.content_type = "image/png" #TODO: get content type from file
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
