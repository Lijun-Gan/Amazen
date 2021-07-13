class AddDiscountToPrices < ActiveRecord::Migration[5.2]
  def change
    add_column :prices, :discount, :boolean, :default => false
  end
end
