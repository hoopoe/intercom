class Tercomin::Api::V1::EventController < ApplicationController
  respond_to :json  
  before_filter :require_tercomin_pm, :only => [:create]
  accept_api_auth :index, :create

  def index
  	respond_with Event.all
  end
 
  def create  	    
  	@event = Event.new(params[:event])  	    
  	respond_to do |format|
      if @event.save       
        format.json  { render :text => @event.id, :status => :created}
      else        
        format.json  { render_validation_errors(@event) }
      end
    end
  end

  private

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
  
end