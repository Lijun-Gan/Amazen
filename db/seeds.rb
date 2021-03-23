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

User.create!(username: "lijun", email: "lijun@gmail.com", password: "password" )

Author.create!( name: "Benjamin Graham",  
    biography: "Benjamin Graham (1894-1976), 
    the father of value investing, has been an inspiration for many of today's 
    most successful businesspeople. He is also the author of Securities Analysis 
    and The Interpretation of Financial Statements. --This text refers to the paperback edition.")

Author.create!( name: "James Clear", biography: "James Clear is an author and speaker focused on habits, decision-making, and continuous improvement.")


Book.create!( 
    title: "The Intelligent Investor: The Definitive Book on Value Investing",
    description: "This classic text is annotated to update Graham's timeless wisdom for today's market conditions...
    The greatest investment advisor of the twentieth century, Benjamin Graham, taught and inspired people worldwide. 
    Graham's philosophy of 'value investing' -- which shields investors from substantial error and teaches them to develop long-term strategies 
    -- has made The Intelligent Investor the stock market bible ever since its original publication in 1949.",
    category: "business & investing",
    publication_date: "February 21, 2006",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg", 
    author_id: 1,
    avg_rating: 4.5)

Price.create!( book_id: 1, book_format: "Kindle",  price: 10.49)
Price.create!( book_id: 1, book_format: "Paperback",  price: 14.29)
Price.create!( book_id: 1, book_format: "Audiobook",  price: 8.58)
Price.create!( book_id: 1, book_format: "Hardcopy",  price: 25.19)
Price.create!( book_id: 1, book_format: "Audio CD",  price: 36.00)


Review.create!(       
    title: "Definitely not a beginners book!",
    body: "I am sure this book is chalk full of good info! However it is certainly not a beginners book to investing.",
    rating: 4,
    user_id: 1,
    book_id: 1)

Review.create!(
    title: "10/10 Great Book, Do Yourself the Favor of Buying the Paperback",
    body: "This is a great book for anyone who is interested in introducing themselves into the world of investing.",
    rating: 5,
    user_id: 1,
    book_id: 1,
)


Book.create!( 
    title: "The War of Art: Break Through the Blocks and Win Your Inner Creative Battles",
    description: "A succinct, engaging, and practical guide for succeeding in any creative sphere, 
    The War of Art is nothing less than Sun-Tzu for the soul.
    What keeps so many of us from doing what we long to do?
    Why is there a naysayer within? How can we avoid the roadblocks of 
    any creative endeavor—be it starting up a dream business venture, 
    writing a novel, or painting a masterpiece? Bestselling novelist Steven 
    Pressfield identifies the enemy that every one of us must face, 
    outlines a battle plan to conquer this internal foe, then pinpoints just how to achieve the greatest success.",
    category: "arts & photography",
    publication_date: "January 11, 2012",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/41ET8OFVFCL._SX342_SY445_QL70_ML2_.jpg", 
    author_id: 2,
    avg_rating: 3.8)

Price.create!( book_id: 2, book_format: "Kindle",  price: 7.19)
Price.create!( book_id: 2, book_format: "Paperback",  price: 12.68)
Price.create!( book_id: 2, book_format: "Audiobook",  price: 6.15)
Price.create!( book_id: 2, book_format: "Hardcopy",  price: 15.27)
Price.create!( book_id: 2, book_format: "Audio CD",  price: 24.29)

Review.create!(       
    title: "Definitely not a beginners book!",
    body: "I am sure this book is chalk full of good info! However it is certainly not a beginners book to investing.",
    rating: 4,
    user_id: 1,
    book_id: 1)

Review.create!(
    title: "10/10 Great Book, Do Yourself the Favor of Buying the Paperback",
    body: "This is a great book for anyone who is interested in introducing themselves into the world of investing.",
    rating: 5,
    user_id: 1,
    book_id: 1,
)

Review.create!(       
    title: " Had Tears In My Eyes By The Time I Was Finished",
    body: "If you're an entrepreneur, an artist, a writer, scientist or just about anybody with an internal urge to CREATE something but cannot because of distractions, fears, doubts and apprehensions, then this is the book for you.",
    rating: 4,
    user_id: 1,
    book_id: 2)

Review.create!(
    title: "What a load",
    body: "Here is this book in a nutshell: what do you want to do? Have discipline and do it. I just saved you ten dollars. You're welcome.",
    rating: 1,
    user_id: 2,
    book_id: 2,
)

