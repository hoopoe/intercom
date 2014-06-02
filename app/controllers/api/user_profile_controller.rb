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

      @users = User.select("users.id, users.login, users.mail, users.firstname, users.lastname, user_profile_t.skills, user_profile_t.avatar_file_name avatar_url")
      .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")
      .where("LOWER(#{UserProfile.table_name}.skills) LIKE LOWER(?)", q)
      .order(sort_clause)
      .limit(@limit)
      .offset(@offset)
      .all

      set_avatars(@users)
      respond_with @users
    else
      @users = User.select("users.id, users.login, users.mail, users.firstname, users.lastname, user_profile_t.skills, user_profile_t.avatar_file_name avatar_url")
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
    @users = User.select("users.id, users.login, users.mail, users.firstname, users.lastname, user_profile_t.skills, user_profile_t.avatar_file_name avatar_url")
      .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")
      .where("LOWER(#{UserProfile.table_name}.user_id) = (?)", params[:id])
      
    if @users.exists?
      set_avatars(@users)
      respond_with @users.first
    else
      respond_with User.find_by_id(params[:id])
    end
  end

  def update
    @profile = UserProfile.find_by_user_id(params[:id])
    @profile.skills = params[:skills]

    if @profile.save
      Rails.logger.info "saved"
    else
      Rails.logger.info "failed to save"
    end
    respond_with @profile
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
        i.avatar_url = "nope" #don't have profile at all
      end
    end
  end
end
