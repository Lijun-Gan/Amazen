class AddPriceToCart < ActiveRecord::Migration[5.2]
  def change
    add_column :carts, :price_id, :integer, null:false
    add_index :carts, :price_id
  end
end
