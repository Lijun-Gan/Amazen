class CreateWishlists < ActiveRecord::Migration[5.2]
  def change
    create_table :wishlists do |t|
      t.integer :user_id, null:false
      t.integer :book_id, null:false

      t.timestamps
    end
    add_index :wishlists, :user_id
    add_index :wishlists, :book_id
  end
end
