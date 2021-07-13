class Book < ApplicationRecord
    validates :title, presence: true
    validates :author_id, presence: true

    validates :category, inclusion:{in:['Arts & Photography', 'Biographies & Memoirs', 'Business & Investing', "Children's Books", 'Cookbooks, Food & Wine', 'History', 'Literature & Fiction', 'Mystery & Suspense', 'Romance', 'Sci-Fi & Fantasy', 'Teens & Toung Adult']}

    belongs_to :book_author ,
        class_name: :Author,
        primary_key: :id,
        foreign_key: :author_id
        
    has_many :prices

    has_many :reviews,
        class_name: :Review,
        primary_key: :id,
        foreign_key: :book_id

    has_many :carts,
        foreign_key: :book_id,
        class_name: :Cart

    has_many :wishlists,
        foreign_key: :book_id,
        class_name: :Wishlist
    
end
