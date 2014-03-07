RedmineApp::Application.routes.draw do
  match '/intercom/index', :to => 'intercom#index', :via => [:get, :post]
end