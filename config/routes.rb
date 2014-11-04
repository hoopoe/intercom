get 'tercomin', :to => 'tercomin#index'
get 'tercomin/:id', :to => 'tercomin#show'

namespace :tercomin do
  namespace :api do
    namespace :v1 do
      resources :user_profile, only: [:index, :show, :update]
      resources :event, only: [:index, :show, :create, :destroy]
      resources :user_event, only: [:index, :show, :update, :destroy]
    end
  end
end
