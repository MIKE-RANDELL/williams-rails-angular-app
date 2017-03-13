Rails.application.routes.draw do
  devise_for :users
  root 'application#index'
  resources :products, only: [:create, :index, :show, :update]
  resources :reviews, only: [:create, :index, :show, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
