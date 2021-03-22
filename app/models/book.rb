class Book < ApplicationRecord
    validates :title, presence: true
    validates :author_id, presence: true

    validates :category, inclusion:{in:['arts & photography', 'biographies & memoirs', 'business & investing', "children's books", 'cookbooks,food & wine', 'history', 'literature & Fiction', 'mystery & suspense', 'romance', 'sci-fi & fantasy', 'teens & young adult']}

    belongs_to :book_author ,
        class_name: :Author,
        primary_key: :id,
        foreign_key: :author_id
        
    has_many :prices

    has_many :reviews,
        class_name: :Review,
        primary_key: :id,
        foreign_key: :book_id
    
end
