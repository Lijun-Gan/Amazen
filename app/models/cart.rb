class Cart < ApplicationRecord
    validates :user_id, :book_id, presence: true 

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id 

    belongs_to :book,
        foreign_key: :book_id,
        class_name: :Book


end
