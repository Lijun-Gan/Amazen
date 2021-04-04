class Wishlist < ApplicationRecord
    validates :user_id, :book_id, :price_id, presence: true 
    validates :user_id, uniqueness: {scope: [:book_id, :price_id]}

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id 

    belongs_to :book,
    foreign_key: :book_id,
    class_name: :Book

    belongs_to :price


end
