@wishlists.each do |wishlist|
    total_rating = 0
    num_reviews = 0

    reviews = []
    reviews=wishlist.book.reviews  if(wishlist.book.reviews)

    
    reviews.each do |review|
        total_rating += review.rating
        num_reviews += 1
    end

    

    
    json.set! wishlist.id do
        json.extract! wishlist, :id, :created_at, :user_id, :book_id, :price_id

        json.price  wishlist.book.prices[wishlist.book.prices.ids.index(wishlist.price_id)].price
        json.format  wishlist.book.prices[wishlist.book.prices.ids.index(wishlist.price_id)].book_format
        json.discount  wishlist.book.prices[wishlist.book.prices.ids.index(wishlist.price_id)].discount
        json.author wishlist.book.book_author.name
 
        # json.price wishlist.book.prices[wishlist.price_id].price
        # json.format wishlist.book.prices[wishlist.price_id].book_format
        json.title wishlist.book.title
        json.image_url wishlist.book.image_url
        json.avg_rating (total_rating.to_f / ([1,reviews.length].max)).round(2)
        json.total_reviews  num_reviews

    end
end