require 'bcrypt'
class UsersController < ApplicationController
 layout 'user_dashboard'

  def profile
  	@user = current_user
  end

  def profile2
  	@user = current_user
  end

  def status
  	@user = current_user
  end

  def account
  	@user = current_user
  end

  def build_profile
  	@user = current_user
    render  :layout => 'wizard'
  end

  def my_page
      @user = current_user
  end

  def check_password
  	bcrypt_object = BCrypt::Password.new(@user.encrypted_password) 
     password_hash = ::BCrypt::Engine.hash_secret(params[:current_password], bcrypt_object.salt)
	    if password_hash == @user.encrypted_password
	    	render plain: "correct"
	    else
	    	render plain: "wrong"
	    end
  end

  def update_profile
       @user.update_attributes(user_params)
       redirect_to user_page_path
       # if !session[:return_to].nil?
       #   redirect_to session[:return_to]
       # else
       #   redirect_to user_timeline_path
       # end
  end

  def user_params
  		params.permit(:dp, :address, :city, :dob, :affiliate, :qualification, :gender, :country, :experience )
  end


end
