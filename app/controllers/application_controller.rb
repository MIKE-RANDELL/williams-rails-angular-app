class ApplicationController < ActionController::Base
  include ActionController::MimeResponds
  include DeviseTokenAuth::Concerns::SetUserByToken
  #protect_from_forgery with: :exception
  protect_from_forgery with: :null_session
  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?


  private

  def index

  end

  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
end
