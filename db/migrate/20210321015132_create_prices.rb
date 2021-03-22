class CreatePrices < ActiveRecord::Migration[5.2]
  def change
    create_table :prices do |t|
      t.integer :book_id, null: false
      t.string :book_format, null: false
      t.float :price, null: false

      t.timestamps
    end
      add_index :prices, :book_id
      add_index :prices, :book_format
      add_index :prices, [:book_id, :book_format], unique: true

  end
end
