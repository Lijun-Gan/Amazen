# json.details do 
    json.extract! @book, :id, :title, :description, :category, :publication_date, :image_url
# end

json.author @book.book_author.name 
json.biography @book.book_author.biography


json.prices do 
    json.array! @book.prices do |price|
        json.extract! price, :book_format, :price
    end
end
