get 'tercomin', :to => 'tercomin#index'
get 'tercomin/:id', :to => 'tercomin#show'

namespace :tercomin do
  namespace :api do
    namespace :v1 do
      resources :user_profile, only: [:index, :show, :update]
      match 'user_profile', :to => 'user_profile#upload', :via => :post
      resources :event, only: [:index, :show, :create, :destroy, :update]
      resources :user_event, only: [:index, :show, :update, :destroy]
      resources :role, only: [:index]
      resources :locale, only: [:index]
    end
  end
end
