get 'intercom', :to => 'intercom#index'

namespace :intercom do
  namespace :api do
    namespace :v1 do
      resources :user_profile, only: [:index, :show, :update]
    end
  end
end
