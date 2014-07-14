require 'redmine'

Redmine::Plugin.register :tercomin do
  name 'TercomIn plugin'
  author 'Vladislav R. and corp.'
  description 'InTercom Social Network'
  version '1.0.0'
  menu :top_menu, :tercomin, { :controller => 'tercomin', :action => 'index' },
   :caption => :tercomin_caption

  permission :update_profile, :api_user_profile => :update
end