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

    set_avatars(users)
    respond_with users
  end

  def show
    if (params.has_key?(:id))
      if (params[:id] == "logged" && !User.current.logged?)
        respond_with "User is not logged", status: :unprocessable_entity
      else
        users = User.select("users.id, users.login, users.mail, users.firstname, users.lastname,
         user_profile_t.data, user_profile_t.settings,
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
          # u.write_attribute('editable', authorize_self_and_manager())
          # u['editable'] = authorize_self_and_manager()
          # foo = Hash[u.map { |f| [f.name.to_sym, f.value] }]
          @response = {:profile => u.attributes, :editable => authorize_self_and_manager()}
          respond_with @response
        else
          # respond_with User.find_by_id(id)
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
      if profile.data.present?
        data = JSON.parse(profile.data)
      else
        data = Hash.new
      end

      if params[:profile][:skills].present?
        data['skills'] = params[:profile][:skills]
      end
      if params[:profile][:position].present?
        data['position'] = params[:profile][:position]
      end
      if params[:profile][:summary].present?
        data['summary'] = params[:profile][:summary]
      end
      if params[:profile][:birthday].present?
        data['birthday'] = params[:profile][:birthday]
      end
      if params[:profile][:room_number].present?
        data['room_number'] = params[:profile][:room_number]
      end
      if params[:profile][:project].present?
        data['project'] = params[:profile][:project]
      end
      profile.data = data.to_json

      if profile.settings.present?
        settings = JSON.parse(profile.settings)
      else
        settings = Hash.new
      end

      if params[:profile][:settings].present?
        settings['theme'] = JSON.parse(params[:profile][:settings])['theme']
      end
      profile.settings = settings.to_json

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
  def authorize_self_and_manager
    if params.has_key?(:id)
      if params[:id] == "logged"
        allowed = true
      else
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
end
