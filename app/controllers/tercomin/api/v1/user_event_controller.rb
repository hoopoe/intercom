class Tercomin::Api::V1::UserEventController < ApplicationController
  respond_to :json

  before_filter :build_event_groups, :except => [:index, :create]
  before_filter :create_hr_form, :except => [:index, :create]
  # before_filter :require_self_or_manager, :only => [:update]
  before_filter :require_self_or_manager_or_hr, :only => [:show, :update]
  
  before_filter :find_user_event, :except => [:index, :create]
  before_filter :require_tercomin_pm, :only => [:destroy]
  
  accept_api_auth :index, :show
  
  def index
    @offset, @limit = api_offset_and_limit   
  	respond_with UserEvent.limit(@limit)
    .offset(@offset)
    .all
    .map{|i| {'uid' => i.user_id, 'eid' => i.event_id, 'body' => 'hidden'}}
  end

  def show
    if @role == :self
      @response = {
      :empForm => @ue.body,
      :hrForm => @hr_form.body,
      :lastname=>@user.lastname,
      :firstname=>@user.firstname,
      :created_on=>@user.created_on,
      :position=>@uPosition,
      :project=>@uProject,
      :extraProject=>@uExtraProject,
      :eventName => @event.name,
      :kind => "self"}
      @response[:data] = @profile.data if @profile
      @response[:peons] = @im_responsible_for
      respond_with @response
    else 
      if @role == :mgr
        @response = {
        :mgrForm => @ue.body,
        :hrForm => @hr_form.body,
        :lastname=>@user.lastname,
        :firstname=>@user.firstname,
        :created_on=>@user.created_on,
        :position=>@uPosition,
        :project=>@uProject,
        :extraProject=>@uExtraProject,
        :eventName => @event.name,
        :kind => "mgr"}
        @response[:data] = @profile.data if @profile
        respond_with @response
      else
        if @role == :hr
          @response = {
            :mgrForms => @ue_by_mgr.map{ |i| i.attributes },
            :hrForm => @hr_form.body,
            :eventname => @event.name,
            :kind => "hr"}
          @response[:empForm] = @ue ? @ue.attributes: ""
          respond_with @response
        else
          render_403        
        end
      end
    end
  end

  def update
    if params[:body].present?
      if @role == :self
        @ue.body = params[:body]
        @ue.save!
        respond_with @ue
      else
        if @role == :mgr
          @ue.body = params[:body]
          @ue.save!
          respond_with @ue  
        else 
          if @role == :hr
            @hr_form.body = params[:body]
            @hr_form.save!
            respond_with @hr_form  
          end
        end
      end
    else
      render_403
    end    
  end

  def destroy
    UserEvent.where(user_id: @user.id, event_id: @event.id).destroy_all    
    respond_to do |format|
      format.api  { render_api_ok }
    end
  end

  private
  def build_event_groups  	
  	tmp = params[:id].split('_')
  	event_id = tmp.pop
  	user_id = tmp.pop
    @user = User.find(user_id)
  	@event = Event.find(event_id)

    @ev_groups = []
    if @event.groups.present?
      begin
        @ev_groups = JSON.parse(@event.groups)
      rescue JSON::ParserError => e
        Rails.logger.info "can't parse event groups"
      end
    end

    if @event.body.present?
        begin
          @ev_body = JSON.parse(@event.body)
        rescue JSON::ParserError => e
          Rails.logger.info "can't parse event body"
      end
    end
    
  rescue ActiveRecord::RecordNotFound
    render_404
  end

  def create_hr_form
    @hrGroup = Group.find_by_lastname("hr");
    if @hrGroup.present?
      @hr_form = UserEvent.find_by_user_id_and_event_id_and_mgr_id(@user.id, @event.id, @hrGroup.id)
      if @hr_form.blank?
        @hr_form = UserEvent.new(:user_id => @user.id, :event_id => @event.id, :mgr_id => @hrGroup.id)
        @hr_form.body = @ev_body['hrForm'].to_json  
        @hr_form.save!
      end
    end
  end

  def is_current_is_manager_for_user
    @mgr_groups = @ev_groups.find_all {|i| i['m'].include?(User.current.id.to_s) && i['e'].include?(@user.id.to_s) }
    return @mgr_groups.present?
  end

  def is_ingroup(groupNames)
    userGroups = User.current.groups.map{ |o| o.lastname }    
    ig = userGroups & groupNames
    return ig.any?
  end

  def require_tercomin_pm    
    return unless require_login        
    if !is_ingroup(['lt-prj-tercomin-pm'])
      render_403
      return false
    end
    true
  end

  def set_current_role
      @role = :hr if is_ingroup(['hr'])
      @role = :mgr if is_current_is_manager_for_user
      @role = :self if @user.id == User.current.id
  end

  def require_self_or_manager    
    return unless require_login
    set_current_role       
    if (@role == :self && @role == :mgr)
      render_403
      return false
    end
    true
  end

  def require_self_or_manager_or_hr
    return unless require_login
    set_current_role
    if (@role == :self && @role == :mgr && @role == :hr)
      render_403
      return false
    end
    true
  end

  def require_hr
    return unless require_login
    if !is_ingroup(['hr'])
      render_403
      return false
    end
    true
  end

  def find_user_event
    if @role == :self
      @ue = UserEvent.find_by_user_id_and_event_id_and_mgr_id(@user.id, @event.id, nil)
      if @ue.blank?
        @ue = UserEvent.new(:user_id => @user.id, :event_id => @event.id, :mgr_id => nil)
        @ue.body = @ev_body['empForm'].to_json  
        @ue.save!
      end
      @profile = UserProfile.find_by_user_id(@ue.user_id)
      my_emps = @ev_groups
        .map{|i| i['e'] if i['m']
        .include?(@user.id.to_s)}
        .compact
      if my_emps.present? 
        my_emps_hash = my_emps.reduce({}, :merge) 
        @im_responsible_for = my_emps_hash.map{ |k,v| { 'id' => "#{k.to_s}_#{@event.id}", 'name' => v } }
      end
    else      
      if @role == :mgr
        @ue = UserEvent.find_by_user_id_and_event_id_and_mgr_id(@user.id, @event.id, User.current.id)
        if @ue.blank?
          @ue = UserEvent.new(:user_id => @user.id, :event_id => @event.id, :mgr_id => User.current.id)
          @ue.body = @ev_body['mgrForm'].to_json  
          @ue.save!
        end
        @profile = UserProfile.find_by_user_id(@ue.user_id)
      else
        if @role == :hr
          @ue = UserEvent
            .select("user_events_t.body, user_profile_t.data, user_events_t.user_id, 
              user_events_t.mgr_id")
            .joins("INNER JOIN #{UserProfile.table_name} 
              ON #{UserEvent.table_name}.user_id = #{UserProfile.table_name}.user_id")
            .where("#{UserEvent.table_name}.user_id = :uid
              and #{UserEvent.table_name}.event_id = :eid
              and #{UserEvent.table_name}.mgr_id IS :mid",
             {:uid => @user.id, :eid => @event.id, :mid => nil})
            .limit(1)
            .first
          @ue_by_mgr = UserEvent
            .select("user_events_t.body, user_profile_t.data, user_events_t.user_id, 
              user_events_t.mgr_id")
            .joins("INNER JOIN #{UserProfile.table_name} 
              ON #{UserEvent.table_name}.mgr_id = #{UserProfile.table_name}.user_id")
            .where("#{UserEvent.table_name}.user_id = :uid
              and #{UserEvent.table_name}.event_id = :eid",
             {:uid => @user.id, :eid => @event.id})
            .all
        end
      end
    end
  end

end  