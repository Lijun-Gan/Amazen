# review_book_ids = []
# review_ids = []
review_book_ids = {}

@user.authorized_reviews.each do |review|
    # review_book_ids << (review.book_id)
    # review_ids << (review.id)
    review_book_ids[review.book_id] = review.id
end

json.extract! @user, :username, :email, :phone_number, :created_at, :id
json.reviewedBookIds review_book_ids 
# json.reviewIds review_ids  

json.reviews do 
    json.array! @user.authorized_reviews do |review|
        json.extract! review, :id, :title, :body, :rating, :updated_at
        json.book_title review.book.title
        json.book_id review.book.id
        json.imageURL review.book.image_url
    end
end