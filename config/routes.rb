get 'tercomin', :to => 'tercomin#index'

namespace :tercomin do
  namespace :api do
    namespace :v1 do
      resources :user_profile, only: [:index, :show, :update]
      resources :corp_event, only: [:index]
    end
  end
end
