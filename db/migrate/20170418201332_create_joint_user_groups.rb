class CreateJointUserGroups < ActiveRecord::Migration
  def change
    create_table :joint_user_groups do |t|
      t.integer :user_id
      t.integer :group_id
      t.integer :status

      t.timestamps null: false
    end
  end
end
