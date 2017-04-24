class AddPicToMembers < ActiveRecord::Migration
  def change
    add_column :members, :pic, :string
  end
end
