class Review < ApplicationRecord
    validates :title, :body, :rating, :user_id, :book_id, presence: true
    validates :user_id, uniqueness: {scope: :book_id}

    belongs_to :review_author,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id
    
    belongs_to :book,
        class_name: :Book,
        primary_key: :id,
        foreign_key: :book_id
end

