
userAuthorizedReviewsIds = []

userAuthorizedReviewsIds = @carts[0].user.authorized_reviews.ids if(@carts.length > 0)

# json.revideIds userAuthorizedReviewsIds

@carts.each do |cart|
    reviewIds = (userAuthorizedReviewsIds & cart.book.review_ids)
    json.set! cart.id do

        json.extract! cart, :id, :user_id, :book_id, :price_id, :quantity, :created_at
        json.hasReview reviewIds.length > 0
        json.title cart.book.title
        json.image_url cart.book.image_url
        json.author cart.book.book_author.name
        json.price  cart.book.prices[cart.book.prices.ids.index(cart.price_id)].price
        json.format  cart.book.prices[cart.book.prices.ids.index(cart.price_id)].book_format
        json.discount  cart.book.prices[cart.book.prices.ids.index(cart.price_id)].discount
        json.review_id reviewIds[0]
    end
end