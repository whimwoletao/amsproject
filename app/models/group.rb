class Group < ActiveRecord::Base
include FriendlyId
	has_many :members
	mount_uploader :logo, LogoUploader
    friendly_id :name, :use => :slugged
    def should_generate_new_friendly_id?
    	 slug.nil? || name_changed? || new_record?
    end
end
