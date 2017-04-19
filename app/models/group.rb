class Group < ActiveRecord::Base
	has_many :members
	mount_uploader :logo, LogoUploader
end
