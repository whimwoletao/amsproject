class AddColumnsToMember < ActiveRecord::Migration
  def change
    add_column :members, :city, :string
    add_column :members, :country, :string
    add_column :members, :info, :text
    add_column :members, :username, :string
  end
end
