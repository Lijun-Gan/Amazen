class Price < ApplicationRecord
    validates :book_id, presence: true
    validates :book_format, presence: true, inclusion:{in:['paperback','kindle', 'audio', 'hardcopy'] }

    validates :book_id, uniqueness: {scope: :book_format}

    belongs_to :book
end
