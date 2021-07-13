# review_book_ids = []
# review_ids = []
# review_book_ids = {}
# total_rating = 0
# review_num = 0



# @user.authorized_reviews.each do |review|
#     # review_book_ids << (review.book_id)
#     # review_ids << (review.id)
#     review_book_ids[review.book_id] = review.id
#     total_rating += review.rating;
#     review_num += 1;
# end

# book_total_rating = {}
# book_review_num = {}

# @user.authorized_reviews.each do |review|
#     total_rating = 0
#     review_num = 0


#     review.book.reviews.each do |bookReview|
#         total_rating += bookReview.rating;
#         review_num += 1;
#     end

#     book_total_rating[review.book_id] = total_rating
#     book_review_num[review.book_id] = review_num

# end


orderIds = []

@user.carts.each do |cart|
    orderIds << (cart.book_id)
end

json.extract! @user, :username, :email, :phone_number, :created_at, :id
# json.reviewedBookIds review_book_ids 
# json.reviewIds review_ids  

json.reviews do 
    json.array! @user.authorized_reviews do |review|

        total_rating = 0
        review_num = 0
    
    
        review.book.reviews.each do |bookReview|
            total_rating += bookReview.rating;
            review_num += 1;
        end
        
        json.extract! review, :id, :title, :body, :rating, :updated_at
        json.book_title review.book.title
        json.book_id review.book.id
        json.imageURL review.book.image_url
        # json.avg_rating (book_total_rating[review.book_id].to_f /  [1, book_review_num[review.book_id]].max).round(2)
        json.avg_rating (total_rating.to_f /  [1, review_num].max).round(2)
        json.total_reviews review_num
        # json.total_reviews book_review_num[review.book_id]
        json.purchased orderIds.include?(review.book.id)

    end
end