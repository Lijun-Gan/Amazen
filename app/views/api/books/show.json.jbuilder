# json.details do 
    json.extract! @book, :id, :title, :description, :category, :publication_date, :image_url, :avg_rating
# end

json.author @book.book_author.name 
json.biography @book.book_author.biography


json.prices do 
    json.array! @book.prices do |price|
        json.extract! price, :book_format, :price
    end
end

json.reviews do
    json.array! @book.reviews do |review|
        json.extract! review, :id, :book_id, :title, :body, :rating, :user_id,:created_at,:updated_at
        json.review_author review.review_author.username
        json.book @book.title
    end
end

