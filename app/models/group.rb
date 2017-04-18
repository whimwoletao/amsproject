class Group < ActiveRecord::Base
	has_many :joint_user_groups
	has_many :users, :through => :joint_user_groups
end
