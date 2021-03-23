json.extract! @review, :id, :title, :body, :rating, :book_id, :updated_at, :created_at
json.bookTitle @review.book.title
json.bookImgUrl @review.book.image_url