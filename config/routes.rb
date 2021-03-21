Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    get "/users/exists", to: "users#exists"
    
    resources :users, only: [:create, :show]
    resources :books, only: [:index, :show]
    
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
end
