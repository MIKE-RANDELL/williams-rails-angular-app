Rails.application.routes.draw do
  #mount_devise_token_auth_for 'User', at: 'auth'

  #devise_for :users
  root 'application#index'

  resources :products, only: [:create, :index, :show, :update]
  resources :reviews, only: [:create, :index, :show, :update]
  resources :pictures
  resources :sub_products
  resources :estimates
  resources :tweets

  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
  end

  get '/product/:id/sub_products', to: 'sub_products#show_sub_products'
end
