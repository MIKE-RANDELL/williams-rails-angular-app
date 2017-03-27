Rails.application.routes.draw do

  devise_for :users
  root 'application#index'
  resources :products, only: [:create, :index, :show, :update]
  resources :reviews, only: [:create, :index, :show, :update]
  resources :pictures
  resources :sub_products
  resources :estimates
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/product/:id/sub_products', to: 'sub_products#show_sub_products'
end
