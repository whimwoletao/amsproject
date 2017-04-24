class Member < ActiveRecord::Base
	belongs_to :group
	#mount_uploader :image, ImageUploader
	mount_uploader :pic, PicUploader

	def self.search(search)
      where("lower(name) LIKE ?", "%#{search.downcase}%")
      # where("description LIKE ?", "%#{search}%")
    end

 #    def self.search(search)
 #    if search
 #    find(:all, :conditions => ['name LIKE ?', "%#{search}%"])
 #    else
 #    find(:all)
 #   end
 # end
end
