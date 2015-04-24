class TercominBaseController < ApplicationController
  before_filter :check_user_has_valid_group

  def get_allowed_group_ids
    return Group.where(:lastname => allowed_groups).pluck(:id)
  end

  private
  
  def allowed_groups
    return ["lt-all", "lt-externaldevelopers"]    
  end

  def is_in_groups?(groups)    
    currentGroups = User.current.groups.map{ |o| o.lastname }
    ig = currentGroups & groups
    return ig.any?
  end

  def check_user_has_valid_group
      return unless require_login
      if !is_in_groups?(allowed_groups)      
        render_403
        return false
      end
      true
  end
end