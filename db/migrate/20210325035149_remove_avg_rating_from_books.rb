class RemoveAvgRatingFromBooks < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :avg_rating, :float
  end
end
