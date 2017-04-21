class Member < ActiveRecord::Base
	belongs_to :group
	mount_uploader :image, ImageUploader
end
