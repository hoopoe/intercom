require 'redmine'

Redmine::Plugin.register :intercom do
  name 'Intercom plugin'
  author 'Vladislav R. and corp.'
  description 'Votes'
  version '1.0.0'
  menu :top_menu, :intercom, { :controller => 'intercom', :action => 'index' }, :caption => 'intercom'
  #Вывод плагина в главном меню redmine
end