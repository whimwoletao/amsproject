class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name
      t.string :description
      t.string :image
      t.string :city
      t.string :address
      t.string :country
      t.string :slug
      t.string :user_id
      t.string :logo
      t.string :email

      t.timestamps null: false
    end
  end
end
