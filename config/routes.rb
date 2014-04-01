get 'intercom', :to => 'intercom#index'

namespace :api do
  resources :user_profile, only: [:index]
end
