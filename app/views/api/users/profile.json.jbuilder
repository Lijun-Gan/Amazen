# review_book_ids = []
# review_ids = []
review_book_ids = {}
total_rating = 0
review_num = 0


@user.authorized_reviews.each do |review|
    # review_book_ids << (review.book_id)
    # review_ids << (review.id)
    review_book_ids[review.book_id] = review.id
    total_rating += review.rating;
    review_num += 1;
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
        json.avg_rating (total_rating.to_f /  [1,review_num].max).round(2)
        json.total_reviews review_num
    end
end