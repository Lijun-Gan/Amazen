class Review < ApplicationRecord
    validates :title, :body, :rating, :user_id, :book_id, presence: true

    belongs_to :review_author,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id
    
    belongs_to :book,
        class_name: :Book,
        primary_key: :id,
        foreign_key: :book_id
end

