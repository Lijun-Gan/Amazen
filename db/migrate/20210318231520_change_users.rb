class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :username
    add_index :users, :username
    add_column :users, :phone_number, :string
    add_index :users, :phone_number, unique: true
  end
end
