class Api::UserProfileController < ApplicationController
  respond_to :json

  helper :sort
  include SortHelper

  # accept_api_auth :update
  # before_filter :authorize
  skip_before_filter :verify_authenticity_token

  def index
    sort_init 'login', 'asc'
    sort_update %w(login firstname lastname mail admin created_on last_login_on)

    @offset, @limit = api_offset_and_limit  
    # @limit = 4
    if (params[:page])
      @offset = @limit * (params[:page].to_i - 1)      
    end
        
    if (params[:skills])
      skills = params[:skills]
      q = skills.map{|s| "%#{s}%"}

      @users = User.select("users.id, users.login, users.mail, users.firstname, users.lastname, user_profile_t.skills")
      .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")  
      .where("LOWER(#{UserProfile.table_name}.skills) LIKE LOWER(?)", q)
      respond_with @users.order(sort_clause).
                          limit(@limit).
                          offset(@offset).
                          all
    else
      @users = User.select("users.id, users.login, users.mail, users.firstname, users.lastname, user_profile_t.skills")
      .joins("LEFT JOIN #{UserProfile.table_name} ON #{User.table_name}.id = #{UserProfile.table_name}.user_id")  
      respond_with @users.order(sort_clause).
                          limit(@limit).
                          offset(@offset).
                          all
    end    
  end

  def show
    @client = UserProfile.find_or_create_by_user_id(params[:id])
    respond_with @client
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
end
