class Tercomin::Api::V1::UserEventController < ApplicationController
  respond_to :json  
  before_filter :find_event, :except => [:index, :create]
  
  # before_filter :require_hr, :only => [:index, :show]
  before_filter :require_self, :only => [:show, :update]
  before_filter :require_tercomin_pm, :only => [:destroy]
  
  accept_api_auth :index, :show

  def index    
  	respond_with UserEvent.all
  end

  def show    
  	@ue = UserEvent.find_by_user_id_and_event_id(@user.id, @event.id)
  	if @ue.present?      
      @response = {:body => @ue.body,
        :lastname=>@user.lastname,
        :firstname=>@user.firstname,
        :created_on=>@user.created_on,
        :position=>@uPosition,
        :project=>@uProject,
        :extraProject=>@uExtraProject,
        :eventName => @event.name}
      respond_with @response
  	else
  		# @ue = UserEvent.find_or_create_by_user_id_and_event_id(@user.id, @event.id)
      begin        
        form = JSON.parse(@event.body)
        groups = JSON.parse(@event.groups) 

        @manageGroups = groups.find_all{ |i| i['m'].keys.include?(@user.id.to_s) }       

        @ue = UserEvent.new
        @ue.user_id = @user.id        
        @ue.event_id = @event.id

        if @manageGroups.empty? #employee form 
           @ue.body = form['empForm'].to_json
           @ue.save!

           @response = {:body => @ue.body,
              :lastname => @user.lastname,
              :firstname => @user.firstname,
              :created_on => @user.created_on,
              :position => @uPosition,
              :project => @uProject,
              :extraProject => @uExtraProject,
              :eventName => @event.name}
            respond_with @response
        else
          forms = [] #manager form 
          for i in @manageGroups            
            for j in i['e'].values
              subF = Hash.new
              subF[:header] = i['n']
              subF[:employee] = j
              subF[:managers] = i['m']
              subF[:body] = form['mgrForm']
              forms.push(subF)
            end
          end
          @ue.body = forms.to_json     
          @ue.save!

          @response = {:body => @ue.body,              
              :lastname=>@user.lastname,
              :firstname=>@user.firstname,
              :created_on=>@user.created_on,
              :position=>@uPosition,
              :project=>@uProject,
              :extraProject=>@uExtraProject,
              :eventName => @event.name}
          respond_with @response
        end      
      rescue        
        render_error({:message => :error_t_parse_error})
      end     
  	end
  end

  def update    
    if params[:body].present?
      @ue = UserEvent.find_by_user_id_and_event_id(@user.id, @event.id)
      if @ue.present?
        @ue.body = params[:body]
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
    profile = UserProfile.find_by_user_id(user_id)
    if profile.present?
      begin
        data = JSON.parse(profile.data)
        @uPosition = data['position'];
        @uProject = data['project'];
        @uExtraProject = data['project_extra']
      rescue JSON::ParserError => e
        Rails.logger.info "can't parse user profile"
      end
    end
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