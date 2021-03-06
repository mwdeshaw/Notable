Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :new]
    resource :session, only: [:create, :destroy]
    resources :notebooks, only: [:index, :show, :create, :update, :destroy]
    resources :notes, only: [:index, :show, :create, :update, :destroy]
  end
  
end