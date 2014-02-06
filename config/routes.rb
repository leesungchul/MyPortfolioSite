MySite::Application.routes.draw do
  root :to => 'static_pages#root'
  get 'snake', to: 'static_pages#snake'
  get 'asteroids', to: 'static_pages#asteroids'
  post 'contact_email', to: 'static_pages#contact_email'
end
