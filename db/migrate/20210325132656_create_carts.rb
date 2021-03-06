class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :user_id, null:false
      t.integer :book_id, null:false
      t.integer :quantity, null:false

      t.timestamps
    end
      add_index :carts, :user_id
      add_index :carts, :book_id
  end
end
