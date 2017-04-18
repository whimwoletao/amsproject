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

  def build_profile
  	@user = current_user
    render  :layout => 'wizard'
    
  end


end
