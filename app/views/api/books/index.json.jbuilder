@books.each do |book|
    json.set! book.id do 
        json.extract! book, :id, :title, :image_url,:avg_rating
        json.price book.prices.first.price
    end
end