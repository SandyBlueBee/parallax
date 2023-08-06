Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'pages#mountains'
  get 'mousemove', to: 'pages#mountains'
  get 'scroll', to: 'pages#scroll'
end
