require 'redmine'

Redmine::Plugin.register :intercom do
  name 'InTercom plugin'
  author 'Vladislav R. and corp.'
  description 'InTercom Social Network'
  version '1.0.0'
  menu :top_menu, :intercom, { :controller => 'intercom', :action => 'index' },
   :caption => :intercom_caption
  #Вывод плагина в главном меню redmine
end