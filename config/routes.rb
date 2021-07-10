Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :meal_plans do
      resources :recipes
    end
    resources :recipes do
      resources :ingredients
    end
  end
end
