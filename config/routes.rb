Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create]
    resources :locations, only: [:show, :index]
    resources :pets, only: [:index, :create, :show]
    resources :reviews, only: [:create]
    resources :bookings, only: [:create]
  end
end
