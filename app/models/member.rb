class Member < ActiveRecord::Base
	belongs_to :group
	#mount_uploader :image, ImageUploader
	mount_uploader :pic, PicUploader
end
