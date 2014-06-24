require 'redmine'

Redmine::Plugin.register :intercom do
  name 'InTercom plugin'
  author 'Vladislav R. and corp.'
  description 'InTercom Social Network'
  version '1.0.0'
  menu :top_menu, :intercom, { :controller => 'intercom', :action => 'index' },
   :caption => :intercom_caption

  permission :update_profile, :api_user_profile => :update
end