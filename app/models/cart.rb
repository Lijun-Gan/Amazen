class Cart < ApplicationRecord
    validates :user_id, :book_id, :price_id, presence: true 

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id 

    belongs_to :book,
        foreign_key: :book_id,
        class_name: :Book

    belongs_to :price,
        foreign_key: :price_id,
        class_name: :Price
end
