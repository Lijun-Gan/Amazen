json.partial! "api/users/user", user: @user

# review_ids = []

# @user.authorized_reviews.each do |review|
#     review_ids << (review.id)
# end

# json.extract! @user, :username, :id, :email, :phone_number
# json.reviewIds review_ids  