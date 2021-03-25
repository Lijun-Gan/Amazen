

@books.each do |book|
    total_rating =  book.reviews.inject(0) do |sum,review|
        sum + review.rating
    end

    json.set! book.id do 
            json.extract! book, :id, :title, :image_url
            json.price book.prices.first.price
            json.avg_rating (total_rating.to_f /  [1,book.reviews.length].max).round(2)
            json.total_reviews book.reviews.length
        end
end