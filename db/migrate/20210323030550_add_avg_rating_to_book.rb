class AddAvgRatingToBook < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :avg_rating, :float
  end
end
