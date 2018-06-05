Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
    get '/companies', to: 'companies#my_companies'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
