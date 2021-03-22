# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Author.destroy_all
Price.destroy_all
Book.destroy_all
Review.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('authors')
ApplicationRecord.connection.reset_pk_sequence!('prices')
ApplicationRecord.connection.reset_pk_sequence!('books')
ApplicationRecord.connection.reset_pk_sequence!('reviews')

demoUser = User.create(username: "AmazenShopper", email: "amazen@gmail.com", password: "amazenLover", phone_number: "0123456789" )

User.create(username: "lijun", email: "lijun@gmail.com", password: "password" )

Author.create( name: "Benjamin Graham",  
    biography: "Benjamin Graham (1894-1976), 
    the father of value investing, has been an inspiration for many of today's 
    most successful businesspeople. He is also the author of Securities Analysis 
    and The Interpretation of Financial Statements. --This text refers to the paperback edition.")

Author.create( name: "James Clear", biography: "James Clear is an author and speaker focused on habits, decision-making, and continuous improvement.")


Book.create( 
    title: "The Intelligent Investor: The Definitive Book on Value Investing",
    description: "This classic text is annotated to update Graham's timeless wisdom for today's market conditions...
    The greatest investment advisor of the twentieth century, Benjamin Graham, taught and inspired people worldwide. 
    Graham's philosophy of 'value investing' -- which shields investors from substantial error and teaches them to develop long-term strategies 
    -- has made The Intelligent Investor the stock market bible ever since its original publication in 1949.",
    category: "business & investing",
    publication_date: "February 21, 2006",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg", 
    author_id: 1)


Price.create( book_id: 1, book_format: "Kindle",  price: 10.49)
Price.create( book_id: 1, book_format: "Paperback",  price: 14.29)
Price.create( book_id: 1, book_format: "Audiobook",  price: 8.58)
Price.create( book_id: 1, book_format: "Hardcopy",  price: 25.19)
Price.create( book_id: 1, book_format: "Audio CD",  price: 36.00)


Review.create(       
    title: "Definitely not a beginners book!",
    body: "I am sure this book is chalk full of good info! However it is certainly not a beginners book to investing.",
    rating: 4,
    user_id: 1,
    book_id: 1)

Review.create(
    title: "10/10 Great Book, Do Yourself the Favor of Buying the Paperback",
    body: "This is a great book for anyone who is interested in introducing themselves into the world of investing.",
    rating: 5,
    user_id: 1,
    book_id: 1,
)