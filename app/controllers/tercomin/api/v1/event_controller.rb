class Tercomin::Api::V1::EventController < TercominBaseController
  respond_to :json
  before_filter :require_logged
  before_filter :require_tercomin_pm, :only => [:create, :destroy, :update]
  before_filter :require_tercomin_pm_or_hr, :only => [:show]
  before_filter :find_event, :except => [:index, :create]
  accept_api_auth :index, :create, :show

  def index
  	respond_with Event.all
  end

  def show
    respond_with @event  
  end

  def update
    @event.safe_attributes = params[:event] if params[:event]
    
    if @event.save       
      respond_with @event
    else        
      render_validation_errors(@event) 
    end
    
  end
 
  def create  	    
  	@event = Event.new
    @event.safe_attributes = params[:event]
  	respond_to do |format|
      if @event.save       
        format.json  { render :text => @event.id, :status => :created}
      else        
        format.json  { render_validation_errors(@event) }
      end
    end
  end

  def destroy
    @event.destroy
    respond_to do |format|
      format.api  { render_api_ok }
    end
  end

  private

  def require_logged
    if (!User.current.logged?)
      respond_with "User is not logged", status: :unprocessable_entity
    end
  end

  def find_event    
    @event = Event.find(params[:id])
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

  def require_tercomin_pm_or_hr
    return unless require_login        
    if (!is_ingroup(['lt-prj-tercomin-pm']) && !is_ingroup(['hr']))
      render_403
      return false
    end
    true
  end
  
end