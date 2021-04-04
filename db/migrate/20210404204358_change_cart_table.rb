class ChangeCartTable < ActiveRecord::Migration[5.2]
  def change
    change_column :carts, :price_id, :integer, :null => true
  end
end
