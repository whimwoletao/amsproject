class Users::RegistrationsController < Devise::RegistrationsController
   layout 'signin'
   #before_action :configure_sign_up_params, only: [:create]
   before_action :configure_account_update_params, only: [:update]
   before_action :configure_sign_up_params, if: :devise_controller?

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  def create
    super
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

   protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :telephone])
    # devise_parameter_sanitizer.for(:sign_up) << :name
    # devise_parameter_sanitizer.for(:sign_up) << :telephone
  end


  def configure_account_update_params

    # devise_parameter_sanitizer.for(:account_update) << :name
    # devise_parameter_sanitizer.for(:account_update) << :telephone
    # devise_parameter_sanitizer.for(:account_update) << :a_qualification
    # devise_parameter_sanitizer.for(:account_update) << :a_cv
    # devise_parameter_sanitizer.for(:account_update) << :a_experience
    # devise_parameter_sanitizer.for(:account_update) << :a_gender
    # devise_parameter_sanitizer.for(:account_update) << :a_dp
    # devise_parameter_sanitizer.for(:account_update) << :a_city
    # devise_parameter_sanitizer.for(:account_update) << :a_address
    # devise_parameter_sanitizer.for(:account_update) << :a_country
  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  def after_sign_up_path_for(resource)
    user_status_path
  end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
