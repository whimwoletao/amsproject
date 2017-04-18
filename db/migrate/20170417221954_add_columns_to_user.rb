class AddColumnsToUser < ActiveRecord::Migration
  def change
    add_column :users, :dob, :datetime
    add_column :users, :qualification, :integer
    add_column :users, :gender, :string
    add_column :users, :experience, :string
    add_column :users, :address, :string
    add_column :users, :city, :string
    add_column :users, :country, :string
  end
end
