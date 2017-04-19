class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.string :name
      t.string :telephone
      t.integer :age
      t.string :email
      t.string :address
      t.string :image
      t.string :gender

      t.timestamps null: false
    end
  end
end
