get 'tercomin', :to => 'tercomin#index'

resources :tercomin, :controller => 'tercomin', :only => [:avatar, :cv] do
  member do
      get 'cv', :action => 'cv', :as => 'cv'
      get 'avatar', :action => 'avatar', :as => 'avatar'
      get 'thumb', :action => 'thumb', :as => 'thumb'
    end
end

namespace :tercomin do
  namespace :api do
    namespace :v1 do
      resources :user_profile, only: [:index, :show, :update]
      match 'user_profile', :to => 'user_profile#upload', :via => :post
      resources :event, only: [:index, :show, :create, :destroy, :update]
      resources :user_event, only: [:index, :show, :update, :destroy] do
        collection do
          get 'search', :action => 'search', :as => 'search'
        end
      end
      resources :role, only: [:index]
      resources :locale, only: [:index]
    end
  end
end
