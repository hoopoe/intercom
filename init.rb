require 'redmine'

Redmine::Plugin.register :tercomin do
  name 'TercomIn plugin'
  author 'lanit-tercom.com'
  description 'TercomIn Social'
  version '1.1'
  menu :top_menu, :tercomin, { :controller => 'tercomin', :action => 'index' },
   :caption => :tercomin_caption
end