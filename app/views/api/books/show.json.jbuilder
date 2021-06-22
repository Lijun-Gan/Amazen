# total_rating =  @book.reviews.inject(0) do |sum,review|
#     sum + review.rating
# end

total_rating = 0
review_ids = []

@book.reviews.each do |review|
    total_rating += review.rating
    review_ids << (review.id)
end


json.book do 
    json.extract! @book, :id, :title, :description, :category, :publication_date, :image_url
    json.author @book.book_author.name 
    json.biography @book.book_author.biography
    json.avg_rating (total_rating.to_f / ([1,@book.reviews.length].max)).round(2)
   
    json.prices do 
        # json.array! @book.prices do |price|
        #     json.extract! price, :book_format, :price, :id
        # end

        @book.prices.each do |price|
            json.set! price.book_format do 
                json.extract! price, :book_format, :price, :id
            end 
        end

    end

    json.reviewIds review_ids     
end


json.reviews do
    @book.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :book_id, :title, :body, :rating, :user_id,:created_at,:updated_at
            json.review_author review.review_author.username
            json.book @book.title
        end
    end
end

# json.prices do 
#     @book.prices.each do |price|
#         json.set! price.book_format do 
#             json.extract! price, :id, :book_id, :book_format, :price
#         end
#     end
# end

