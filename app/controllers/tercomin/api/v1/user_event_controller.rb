class Tercomin::Api::V1::UserEventController < ApplicationController
  respond_to :json  
  before_filter :find_event, :except => [:index, :create]
  
  # before_filter :require_hr, :only => [:index, :show]
  before_filter :require_self, :only => [:show]
  before_filter :require_tercomin_pm, :only => [:destroy]
  
  accept_api_auth :index, :show

  def index    
  	respond_with UserEvent.all
  end

  def show    
  	@ue = UserEvent.find_by_user_id_and_event_id(@user.id, @event.id)
  	if @ue.present?
  		respond_with @ue
  	else
  		@ue = UserEvent.find_or_create_by_user_id_and_event_id(@user.id, @event.id)
  		@ue.body = @event.body
  		@ue.save!
  		respond_with @ue
  	end
  end

  def update    
    if params[:user_event][:body].present?
      @ue = UserEvent.find_by_user_id_and_event_id(@user.id, @event.id)
      if @ue.present?
        @ue.body = params[:user_event][:body]
        @ue.save!
        respond_with @ue
      else
        render_403
      end
    else
      render_403
    end    
  end

  def destroy
    @ue = UserEvent.find_by_user_id_and_event_id(@user.id, @event.id)
    if @ue.present?
      @ue.destroy
    end  
    respond_to do |format|
      format.api  { render_api_ok }
    end
  end

  private
  def find_event  	
  	tmp = params[:id].split('_')
  	event_id = tmp.pop
  	user_id = tmp.pop
  	@event = Event.find(event_id)
  	@user = User.find(user_id)  	
  rescue ActiveRecord::RecordNotFound
    render_404
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

  def require_self    
    return unless require_login        
    if @user.id != User.current.id
      render_403
      return false
    end
    true
  end

end  