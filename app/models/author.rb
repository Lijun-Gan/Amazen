class Author < ApplicationRecord
    validates :name, presence: true 

    has_many :written_booksb

end
