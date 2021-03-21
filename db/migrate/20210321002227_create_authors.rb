class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.string :name, null:false
      t.string :biography

      t.timestamps
    end
  end
end
