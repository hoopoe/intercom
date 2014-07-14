get 'tercomin', :to => 'tercomin#index'

namespace :tercomin do
  namespace :api do
    namespace :v1 do
      resources :user_profile, only: [:index, :show, :update]
    end
  end
end
