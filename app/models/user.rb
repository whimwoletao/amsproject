class User < ActiveRecord::Base

	has_many :joint_user_groups
	has_many :groups, through => :joint_user_groups

	mount_uploader :dp, DpUploader

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
