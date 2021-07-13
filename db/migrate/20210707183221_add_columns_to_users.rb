class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :full_name, :string
    add_column :users, :image_url, :string
    add_column :users, :city, :string
    add_column :users, :zip_code, :string
  end
end
