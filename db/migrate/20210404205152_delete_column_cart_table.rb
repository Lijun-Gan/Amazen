class DeleteColumnCartTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :carts, name: "index_carts_on_price_id"
    remove_column :carts, :price_id, :integer
  end

end
