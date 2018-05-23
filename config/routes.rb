Rails.application.routes.draw do
  root 'user#index'
  get '/user/list', to: 'user#list'
  post '/user/create', to: 'user#create'

  # resource :user, defaults: {format: :json}

  # resource :user
  # get '/user/user_list', to: 'user#user_list', :defaults => { :format => 'json' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
