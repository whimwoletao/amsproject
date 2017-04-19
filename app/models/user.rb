class User < ActiveRecord::Base

	has_many :groups
	

	mount_uploader :dp, DpUploader
	mount_uploader :doc, DocUploader

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
