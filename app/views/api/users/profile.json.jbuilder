json.extract! @user, :username, :email, :phone_number, :created_at
json.reviews do 
    json.array! @user.authorized_reviews do |review|
        json.extract! review, :id, :title, :body, :rating, :updated_at
        json.book_title review.book.title
        json.book_id review.book.id
        json.imageURL review.book.image_url
    end
end