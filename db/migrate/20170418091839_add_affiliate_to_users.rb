class AddAffiliateToUsers < ActiveRecord::Migration
  def change
    add_column :users, :affiliate, :string
  end
end
