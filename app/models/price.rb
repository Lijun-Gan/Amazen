class Price < ApplicationRecord
    validates :book_id, presence: true
    validates :book_format, presence: true, inclusion:{in:['Paperback','Kindle', 'Audiobook', 'Hardcopy', 'Audio CD'] }

    validates :book_id, uniqueness: {scope: :book_format}

    belongs_to :book

    has_many :wishlists
end
