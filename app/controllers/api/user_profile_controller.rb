class Api::UserProfileController < ApplicationController  
  respond_to :json
  def index        
    @profiles = UserProfile.all
    respond_with @profiles
  end
end