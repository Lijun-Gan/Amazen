Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    get "/users/exists", to: "users#exists"

    resources :users, only: [:create, :show, :update]

    get "/books/recommendation", to: "books#recommendation"
    
    resources :books, only: [:index, :show]
    
    get "/books/categories/:category", to: "books#category"
    get "/books/formats/:format", to: "books#format"
    get "/books/titles/:title", to: "books#title"


    get "/users/:userId/reviews", to: "users#reviews"

    resources :reviews, only: [ :create, :update, :destroy, :show]
    resources :carts, only:[:create, :destroy, :show, :index]
    resources :wishlists, only:[:create, :destroy, :show, :index]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
end
