class AddMDpToMember < ActiveRecord::Migration
  def change
    add_column :members, :m_dp, :string
  end
end
