class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :description
      t.string :category
      t.date :publication_date
      t.string :image_url
      t.integer :author_id, null: false 

      t.timestamps

    end
    add_index :books, :category
    add_index :books, :author_id
  end
end
