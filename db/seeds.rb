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
Cart.destroy_all
Wishlist.destroy_all



ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('authors')
ApplicationRecord.connection.reset_pk_sequence!('prices')
ApplicationRecord.connection.reset_pk_sequence!('books')
ApplicationRecord.connection.reset_pk_sequence!('reviews')
ApplicationRecord.connection.reset_pk_sequence!('carts')
ApplicationRecord.connection.reset_pk_sequence!('wishlists')


demoUser = User.create(username: "AmazenShopper", email: "amazen@gmail.com", password: "amazenLover", phone_number: "0123456789", full_name: "Lijun Gan", city: "New York", zip_code: "10002" )

User.create!(username: "Lijun", full_name: "Lily", email: "lijun@gmail.com", password: "password",phone_number:"1111111111" )

User.create!(username: "Gan", email: "gan@gmail.com", password: "password",phone_number:"2222222222" )

User.create!(username: "Li", email: "li@gmail.com", password: "password",phone_number:"4444444444" )

User.create!(username: "Jun", email: "jun@gmail.com", password: "password",phone_number:"5555555555" )


User.create!(username: "App", full_name: "App Academy", email: "app@gmail.com", password: "password",phone_number:"3333333333" )

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
    category: "Business & Investing",
    publication_date: "February 21, 2006",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg", 
    author_id: 1)

Price.create!( book_id: 1, book_format: "Audiobook",  price: 8.58)
Price.create!( book_id: 1, book_format: "Kindle",  price: 10.49, discount: true)
Price.create!( book_id: 1, book_format: "Paperback",  price: 14.29)
Price.create!( book_id: 1, book_format: "Hardcopy",  price: 25.19)
Price.create!( book_id: 1, book_format: "Audio CD",  price: 36.00)




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
    category: "Arts & Photography",
    publication_date: "January 11, 2012",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/41ET8OFVFCL._SX342_SY445_QL70_ML2_.jpg", 
    author_id: 2)

Price.create!( book_id: 2, book_format: "Kindle",  price: 7.19, discount: true)
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
        title: " Had Tears In My Eyes By The Time I Was Finished",
        body: "If you're an entrepreneur, an artist, a writer, scientist or just about anybody with an internal urge to CREATE something but cannot because of distractions, fears, doubts and apprehensions, then this is the book for you.",
        rating: 4,
        user_id: 1,
        book_id: 2)
        
    Review.create!(
        title: "10/10 Great Book, Do Yourself the Favor of Buying the Paperback",
        body: "This is a great book for anyone who is interested in introducing themselves into the world of investing.",
        rating: 5,
        user_id: 2,
        book_id: 1)

Review.create!(
    title: "What a load",
    body: "Here is this book in a nutshell: what do you want to do? Have discipline and do it. I just saved you ten dollars. You're welcome.",
    rating: 1,
    user_id: 2,
    book_id: 2)



Review.create!(       
    title: "Definitely not a beginners book!",
    body: "I am sure this book is chalk full of good info! However it is certainly not a beginners book to investing.",
    rating: 4,
    user_id: 3,
    book_id: 1)

Review.create!(
    title: "10/10 Great Book, Do Yourself the Favor of Buying the Paperback",
    body: "This is a great book for anyone who is interested in introducing themselves into the world of investing.",
    rating: 5,
    user_id: 3,
    book_id: 2)
    


Author.create!( name: "Jamie Kern Lima",  
    biography: "Jamie Kern Lima is a New York Times bestselling author and Founder of IT Cosmetics, a company she started in her living room and grew to the largest luxury makeup brand in the country. She sold the company to L’Oréal in a billion-dollar deal and became the first female CEO of a brand in its 100+ year history. Her love of her customers and remarkable authenticity.",
    
)

Book.create!( 
    title: "One Fish Two Fish Red Fish Blue Fish (I Can Read It All by Myself)",
    description: "From counting to opposites to Dr. Seuss's signature silly rhymes, this book has everything a beginning reader needs! Meet the bumpy Wump and the singing Ying, and even the winking Yink who drinks pink ink. The silly rhymes and colorful cast of characters will have every child giggling from morning to night.From near to farfrom  here to there,funny things are everywhere.",
    category: "Children's Books",
    publication_date: "January 11, 2012",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51EdPMN219L.jpg", 
    author_id: 3)
    
Price.create!( book_id: 3, book_format: "Hardcopy",  price: 25.25)
Price.create!( book_id: 3, book_format: "Kindle",  price: 7.99)
Price.create!( book_id: 3, book_format: "Paperback",  price: 10.16)
Price.create!( book_id: 3, book_format: "Audiobook",  price: 3.38)
Price.create!( book_id: 3, book_format: "Audio CD",  price: 20.29, discount: true)

        
Author.create!( name: "Dr. Seuss",  
    biography: "THEODOR SEUSS GEISEL--aka Dr. Seuss--is one of the most beloved children's book authors of all time. From The Cat in the Hat to Oh, the Places You'll Go!, his iconic characters, stories, and art style have been a lasting influence on generations of children and adults. The books he wrote and illustrated under the name Dr. Seuss (and others that he wrote but did not illustrate, including some under the pseudonyms Theo. LeSieg and Rosetta Stone) have been translated into forty-five languages. Hundreds of millions of copies have found their way into homes and hearts around the world. Dr. Seuss's long list of awards includes three Caldecott Honors, the Pulitzer Prize, and eight honorary doctorates. Works based on his original stories have won three Oscars, three Emmys, three Grammys, and a Peabody. While Theodor Geisel died on September 24, 1991, Dr. Seuss lives on, inspiring generations of children of all ages to explore the joys of reading. For more information about Dr. Seuss and his works, visit seussville.com and follow us on Instagram and Facebook."
)  
    
Book.create!( 
    title: "Believe IT: How to Go from Underestimated to Unstoppable",
    description: "A succinct, engaging, and practical guide for succeeding in any creative sphere, 
    The War of Art is nothing less than Sun-Tzu for the soul.
    What keeps so many of us from doing what we long to do?
    Why is there a naysayer within? How can we avoid the roadblocks of 
    any creative endeavor—be it starting up a dream business venture, 
    writing a novel, or painting a masterpiece? Bestselling novelist Steven 
    Pressfield identifies the enemy that every one of us must face, 
    outlines a battle plan to conquer this internal foe, then pinpoints just how to achieve the greatest success.",
    category: "Biographies & Memoirs",
    publication_date: "February 23, 2021",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51Dhc5QyG3L._SX327_BO1,204,203,200_.jpg", 
    author_id: 4)


Price.create!( book_id: 4, book_format: "Kindle",  price: 12.99)
Price.create!( book_id: 4, book_format: "Paperback",  price: 7.16)
Price.create!( book_id: 4, book_format: "Audiobook",  price: 9.99)
Price.create!( book_id: 4, book_format: "Hardcopy",  price: 16.68, discount: true)
Price.create!( book_id: 4, book_format: "Audio CD",  price: 14.29)

Author.create!( name: "Jennifer L. Armentrout",  
    biography: "# 1 NEW YORK TIMES, # 1 International, and USA TODAY Bestselling author Jennifer L. Armentrout lives in West Virginia. She also writes under the name J. Lynn. When she's not hard at work writing, she spends her time, reading, working out, watching zombie movies, and pretending to write. She shares her home with her husband, his K-9 partner named Diesel and her hyper Border Jack Apollo, and a slew of farm animals that include alpacas, goats, and sheep."
)
    
Book.create!( 
    title: "A Kingdom of Flesh and Fire: A Blood and Ash Novel",
    description: "Everything Poppy has ever believed in is a lie, including the man she was falling in love with. Thrust among those who see her as a symbol of a monstrous kingdom, she barely knows who she is without the veil of the Maiden. But what she does know is that nothing is as dangerous to her as him. The Dark One. The Prince of Atlantia. He wants her to fight him, and that’s one order she’s more than happy to obey. He may have taken her, but he will never have her.A Choice….Casteel Da’Neer is known by many names and many faces. His lies are as seductive as his touch. His truths as sensual as his bite. Poppy knows better than to trust him. He needs her alive, healthy, and whole to achieve his goals. But he’s the only way for her to get what she wants—to find her brother Ian and see for herself if he has become a soulless Ascended. Working with Casteel instead of against him presents its own risks. He still tempts her with every breath, offering up all she’s ever wanted.",
    category: "Romance",
    publication_date: "September 1, 2020",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51sA-FQmoYL._SX326_BO1,204,203,200_.jpg", 
    author_id: 5)


Price.create!( book_id: 5, book_format: "Paperback",  price: 17.09)
Price.create!( book_id: 5, book_format: "Kindle",  price: 6.99, discount: true)
Price.create!( book_id: 5, book_format: "Audiobook",  price: 9.99)
Price.create!( book_id: 5, book_format: "Hardcopy",  price: 12.68)
Price.create!( book_id: 5, book_format: "Audio CD",  price: 21.27)

Author.create!( name: "Nora Roberts",  
    biography: "NORA ROBERTS is the #1 New York Times bestselling author of more than 200 novels, including Legacy, Hideaway, The Chronicles of the One trilogy, Under Currents, Shelter in Place, and many more. She is also the author of the bestselling In Death series written under the pen name J.D. Robb. There are more than 500 million copies of her books in print."
)
    
Book.create!( 
    title: "The Awakening: The Dragon Heart Legacy, Book 1 (The Dragon Heart Legacy, 1)",
    description: "In the realm of Talamh, a teenage warrior named Keegan emerges from a lake holding a sword―representing both power and the terrifying responsibility to protect the Fey. In another realm known as Philadelphia, a young woman has just discovered she possesses a treasure of her own. When Breen Kelly was a girl, her father would tell her stories of magical places. Now she’s an anxious twentysomething mired in student debt and working a job she hates. But one day she stumbles upon a shocking discovery: her mother has been hiding an investment account in her name. It has been funded by her long-lost father―and it’s worth nearly four million dollars.",
    category: "Sci-Fi & Fantasy",
    publication_date: "November 24, 2020",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51vfWRjaYoL._SX327_BO1,204,203,200_.jpg", 
    author_id: 6,
)


Price.create!( book_id: 6, book_format: "Kindle",  price: 14.99)
Price.create!( book_id: 6, book_format: "Paperback",  price: 15.26, discount: true)
Price.create!( book_id: 6, book_format: "Audiobook",  price: 4.95)
Price.create!( book_id: 6, book_format: "Hardcopy",  price: 16.18)
Price.create!( book_id: 6, book_format: "Audio CD",  price: 25.78)


Author.create!( name: "Tieghan Gerard",  
    biography: "NORA ROBERTS is the #1 New York Times bestselling author of more than 200 novels, including Legacy, Hideaway, The Chronicles of the One trilogy, Under Currents, Shelter in Place, and many more. She is also the author of the bestselling In Death series written under the pen name J.D. Robb. There are more than 500 million copies of her books in print."
)    
    
Book.create!( 
    title: "Half Baked Harvest Super Simple: More Than 125 Recipes for Instant, Overnight, Meal-Prepped, and Easy Comfort Foods: A Cookbook",
    description: "We all want to make and serve our loved ones beautiful food—but we shouldn’t have to work so hard to do it. With Half Baked Harvest Super Simple, Tieghan Gerard has solved that problem. 
    On her blog and in her debut cookbook, Tieghan is beloved for her freshly sourced, comfort-food-forward recipes that taste even better than they look. Half Baked Harvest Super Simple takes what fans loved most about Half Baked Harvest Cookbook and distills it into quicker, more manageable dishes, including options for one-pot meals, night-before meal prep, and even some Instant Pot® or slow cooker recipes. Using the most important cooking basics, you’ll whip up everyday dishes like Cardamom Apple Fritters, Spinach and Artichoke Mac and Cheese, and Lobster Tacos to share with your family, or plan stress-free dinner parties with options like Slow Roasted Moroccan Salmon and Fresh Corn and Zucchini Summer Lasagna.",
    category: "Cookbooks, Food & Wine",
    publication_date: "October 29, 2019",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/91osDWcy6jL.jpg", 
    author_id: 7)


Price.create!( book_id: 7, book_format: "Paperback",  price: 18.19)
Price.create!( book_id: 7, book_format: "Kindle",  price: 14.99, discount:true)
Price.create!( book_id: 7, book_format: "Audiobook",  price: 4.95)
Price.create!( book_id: 7, book_format: "Hardcopy",  price: 14.77)


Author.create!( name: "Stephen King",  
    biography: "Stephen King is the author of more than sixty books, all of them worldwide bestsellers. His recent work includes If It Bleeds, The Institute, Elevation, The Outsider, Sleeping Beauties (cowritten with his son Owen King), and the Bill Hodges trilogy: End of Watch, Finders Keepers, and Mr. Mercedes (an Edgar Award winner for Best Novel and an AT&T Audience Network original television series). His novel 11/22/63 was named a top ten book of 2011 by The New York Times Book Review and won the Los Angeles Times Book Prize for Mystery/Thriller. His epic works The Dark Tower, It, Pet Sematary, and Doctor Sleep are the basis for major motion pictures, with It now the highest-grossing horror film of all time. He is the recipient of the 2020 Audio Publishers Association Lifetime Achievement Award, the 2018 PEN America Literary Service Award, the 2014 National Medal of Arts, and the 2003 National Book Foundation Medal for Distinguished Contribution to American Letters. He lives in Bangor, Maine, with his wife, novelist Tabitha King."
)
    
Book.create!( 
    title: "If It Bleeds",
    description: "The novella is a form King has returned to over and over again in the course of his amazing career, and many have been made into iconic films, including “The Body” (Stand By Me) and “Rita Hayworth and Shawshank Redemption” (Shawshank Redemption). Like Four Past Midnight, Different Seasons, and most recently Full Dark, No Stars, If It Bleeds is a uniquely satisfying collection of longer short fiction by an incomparably gifted writer.",
    category: "Mystery & Suspense",
    publication_date: "April 20, 2020",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51Zz45NoRbL._SX327_BO1,204,203,200_.jpg", 
    author_id: 8)


Price.create!( book_id: 8, book_format: "Paperback",  price: 13.69, discount: true)
Price.create!( book_id: 8, book_format: "Kindle",  price: 11.99)
Price.create!( book_id: 8, book_format: "Audiobook",  price: 7.95)
Price.create!( book_id: 8, book_format: "Hardcopy",  price: 22.79)


Author.create!(
    name: "Rysa Walker",  
    biography: "RYSA WALKER is the author of the bestselling CHRONOS Files series. Timebound, the first book in the series, was the Young Adult and Grand Prize winner in the 2013 Amazon Breakthrough Novel Awards. The CHRONOS Files has sold nearly half a million copies since 2013 and has been translated into fourteen languages.
In addition to speculative fiction, she writes mysteries as C. Rysa Walker, occasionally in collaboration with author Caleb Amsel.
Rysa currently resides in North Carolina with her husband, two youngest sons, and a hyperactive golden retriever. When not working on the next installment in her CHRONOS Files universe, she watches shows where travelers boldly go to galaxies far away, or reads about magical creatures and superheroes from alternate timelines."
)  
Book.create!(
    title: "Now, Then, and Everywhen (Chronos Origins Book 1)",
    description: "When two time-traveling historians cross paths during one of the most tumultuous decades of the twentieth century, history goes helter-skelter. But which one broke the timeline? In 2136 Madison Grace uncovers a key to the origins of CHRONOS, a time-travel agency with ties to her family’s mysterious past. Just as she is starting to jump through history, she returns to her timeline to find millions of lives erased—and only the people inside her house realize anything has changed.
In 2304 CHRONOS historian Tyson Reyes is assigned to observe the crucial events that played out in America’s civil rights movement. But a massive time shift occurs while he’s in 1965, and suddenly the history he sees isn’t the history he knows.
As Madi’s and Tyson’s journeys collide, they must prevent the past from being erased forever. But strange forces are at work. Are Madi and Tyson in control or merely pawns in someone else’s game? ",
    category:"Biographies & Memoirs",    
    publication_date: "April  1, 2020",
    image_url: "https://m.media-amazon.com/images/I/51GrFhn-H5L.jpg",
    author_id: 9)

Price.create!( book_id: 9, book_format: "Kindle",  price: 7.99)
Price.create!( book_id: 9, book_format: "Audiobook",  price: 3.38, discount: true)


Author.create!( 
    name: "Tui T. Sutherland ",  
    biography: "Tui T. Sutherland, also known as T. T. Sutherland (born July 31, 1978 in Caracas, Venezuela) is a Venezuelan-American children's book author who has also written under the pen name Heather Williams. She shares another pen name, Erin Hunter, with writers Kate Cary and Cherith Baldry when they collaborate with editor Victoria Holmes on the Seekers and Warriors series of novels. In 2009, she appeared as a contestant on Jeopardy!, becoming a two-day champion and winning a grand total of $46,200 ."
)

Book.create!(
    title: "The Dangerous Gift (Wings of Fire, Book 14)",
    category:"Literature & Fiction",  
    description: "ActiveRecord uses the underlying database sequence to create primary keys. ... the IDs start from 1, there is no straight forward way in rails to do it. You can do. 1) Model.destroy_all ... which will handle all that you want, for a single table, if that's what you need ... Model.table_name) after Model.destroy_all.",
    publication_date: "March 2 , 2021",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51yu5yEhngL._SX329_BO1,204,203,200_.jpg",
    author_id: 10)

Price.create!( book_id: 10, book_format: "Kindle",  price: 10.99)
Price.create!( book_id: 10, book_format: "Paperback",  price: 10.16)
Price.create!( book_id: 10, book_format: "Hardcopy",  price: 10.79)




Author.create!( 
name: "Walter Isaacson",  
biography: "Walter Isaacson, University Professor of History at Tulane, has been CEO of the Aspen Institute, chairman of CNN, and editor of Time magazine. He is the author of Leonardo da Vinci; Steve Jobs; Einstein: His Life and Universe; Benjamin Franklin: An American Life; and Kissinger: A Biography. He is also the coauthor of The Wise Men: Six Friends and the World They Made. "
)

Book.create!(
    title: "The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race",
    description: "When Jennifer Doudna was in sixth grade, she came home one day to find that her dad had left a paperback titled The Double Helix on her bed. She put it aside, thinking it was one of those detective tales she loved. When she read it on a rainy Saturday, she discovered she was right, in a way. As she sped through the pages, she became enthralled by the intense drama behind the competition to discover the code of life. Even though her high school counselor told her girls didn’t become scientists, she decided she would. Driven by a passion to understand how nature works and to turn discoveries into inventions, she would help to make what the book’s author, James Watson, told her was the most important biological advance since his co-discovery of the structure of DNA. She and her collaborators turned ​a curiosity ​of nature into an invention that will transform the human race: an easy-to-use tool that can edit DNA. Known as CRISPR, it opened a brave new world of medical miracles and moral questions.",
    category: "Literature & Fiction", 
    publication_date: "March 9, 2021",
    image_url: "https://m.media-amazon.com/images/I/41KMmXBPckL.jpg",
    author_id: 11)
   
Price.create!( book_id: 11, book_format: "Audiobook",  price: 8.00)
Price.create!( book_id: 11, book_format: "Kindle",  price: 16.99, discount: true)


Author.create!( 
name: "Isabel Wilkerson",  
biography: "Isabel Wilkerson, winner of the Pulitzer Prize and the National Humanities Medal, is the author the critically acclaimed New York Times bestsellers The Warmth of Other Suns, and Caste: The Origins of Our Discontents."
)

Book.create!(
    title: "Caste (Oprah's Book Club): The Origins of Our Discontents",
    description: "In this brilliant book, Isabel Wilkerson gives us a mas Beautifully written, original, and revealing, Caste: The Origins of Our Discontents is an eye-opening story of people and history, and a reexamination of what lies under the surface of ordinary lives and of American life today.",
    publication_date: "August 4 ,2020",
    category: "Literature & Fiction", 
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51f42uWcUWL._SX328_BO1,204,203,200_.jpg",
    author_id: 12)

Price.create!( book_id: 12, book_format: "Kindle",  price: 14.99)
Price.create!( book_id: 12, book_format: "Paperback",  price: 31.27)
Price.create!( book_id: 12, book_format: "Hardcopy",  price: 19.02)

Author.create!( 
    name: "Erik Larson",  
    biography: "Erik Larson is the author of five national bestsellers: Dead Wake, In the Garden of Beasts, Thunderstruck, The Devil in the White City, and Isaac’s Storm, which have collectively sold more than nine million copies. His books have been published in nearly twenty countries.")

Book.create!(
    title: "Thunderstruck",
    description: "In Thunderstruck, Erik Larson tells the interwoven stories of two men—Hawley Crippen, a very unlikely murderer, and Guglielmo Marconi, the obsessive creator of a seemingly supernatural means of communication—whose lives intersect during one of the greatest criminal chases of all time. Set in Edwardian London and on the stormy coasts of Cornwall, Cape Cod, and Nova Scotia, Thunderstruck evokes the dynamism of those years when great shipping companies competed to build the biggest, fastest ocean liners; scientific advances dazzled the public with visions of a world transformed; and the rich outdid one another with ostentatious displays of wealth. Against this background, Marconi races against incredible odds and relentless skepticism to perfect his invention: the wireless, a prime catalyst for the emergence of the world we know today. Meanwhile, Crippen, “the kindest of men,” nearly commits the perfect murder. With his unparalleled narrative skills, Erik Larson guides us through a relentlessly suspenseful chase over the waters of the North Atlantic. Along the way, he tells of a sad and tragic love affair that was described on the front pages of newspapers around the world, a chief inspector who found himself strangely sympathetic to the killer and his lover, and a driven and compelling inventor who transformed the way we communicate.",
    publication_date: "October 24, 2006",
    category: "Literature & Fiction", 
    image_url: "https://m.media-amazon.com/images/I/51CrMCw54EL.jpg",
    author_id: 13)

Price.create!( book_id: 13, book_format: "Kindle",  price: 9.99)
Price.create!( book_id: 13, book_format: "Audiobook", price: 6.69, discount: true)
    

Author.create!( 
    name: "Gayle Tzemach Lemmon",  
    biography: "Gayle Tzemach Lemmon is the author of the New York Times bestsellers Ashley's War: The Untold Story of a Team of Women Soldiers on the Special Ops Battlefield (2015) and The Dressmaker of Khair Khana (2011), about a young entrepreneur who supported her community under the Taliban. Ashley's War is currently being developed into a major motion picture at Universal. Her next book, for Penguin Press, is set in northeastern Syria and will be published in February 2021. The Daughters of Kobani tells the story of what ISIS has left in its wake: the most far-reaching experiment in women's equality in the least likely place in the world brought to you by young women who have been battling ISIS town by town, street by street since 2013. These young women served as America's ground force in the fight to defeat the Islamic State and The Daughters of Kobani tells for the first time the story of how they came to serve as America's partner. Lemmon, who serves as an adjunct senior fellow at the Council on Foreign Relations, along with private sector leadership roles in emerging technology and national security, began writing about entrepreneurship in conflict and post-conflict zones while studying for her MBA at Harvard following a decade covering politics at the ABC News Political Unit. This work from Afghanistan, Rwanda, Liberia, Bosnia and beyond has been published by the World Bank, Harvard Business School, the Financial Times, Harvard Business Review and CNN, among others. Following MBA study, she led public policy analysis during the global financial crisis at the global investment firm PIMCO. Lemmon is a frequent speaker on national security topics, including at the Aspen Security Forum and TED forums, and has given talks at West Point, ODNI, the Defense Intelligence Agency, the U.S. Naval Academy, and the National Infantry Museum. Her TED Talk on Ashley's War and the reshaping of the hero story to include women has received more than a million views worldwide. She regularly appears on MSNBC, CNN, PBS, and National Public Radio. Along with her national security work, she has reported and written extensively on topics including child marriage in the United States for PBS NewsHour and on school choice, single moms and the power and importance of girls' ambition for The Atlantic. Lemmon holds an MBA from Harvard and received the Dean's Award for her work on women's entrepreneurship. In addition to serving as a Robert Bosch Fellow in Germany, she served as a Fulbright scholar in Spain, on the board of the international aid organization Mercy Corps and is a member of the Bretton Woods Committee. She speaks Spanish, German and French and is conversant in Dari and Kurmanci.")

Book.create!(
title: "The Daughters of Kobani: A Story of Rebellion, Courage, and Justice",
description: "In 2014, northeastern Syria might have been the last place you would expect to find a revolution centered on women's rights. But that year, an all-female militia faced off against ISIS in a little town few had ever heard of: Kobani. By then, the Islamic State had swept across vast swaths of the country, taking town after town and spreading terror as the civil war burned all around it. From that unlikely showdown in Kobani emerged a fighting force that would wage war against ISIS across northern Syria alongside the United States. In the process, these women would spread their own political vision, determined to make women's equality a reality by fighting—house by house, street by street, city by city—the men who bought and sold women. Based on years of on-the-ground reporting, The Daughters of Kobani is the unforgettable story of the women of the Kurdish militia that improbably became part of the world's best hope for stopping ISIS in Syria. Drawing from hundreds of hours of interviews, bestselling author Gayle Tzemach Lemmon introduces us to the women fighting on the front lines, determined to not only extinguish the terror of ISIS but also prove that women could lead in war and must enjoy equal rights come the peace. In helping to cement the territorial defeat of ISIS, whose savagery toward women astounded the world, these women played a central role in neutralizing the threat the group posed worldwide. In the process they earned the respect—and significant military support—of U.S. Special Operations Forces. Rigorously reported and powerfully told, The Daughters of Kobani shines a light on a group of women intent on not only defeating the Islamic State on the battlefield but also changing women's lives in their corner of the Middle East and beyond.",
publication_date: "February 16, 2021",
category: "Biographies & Memoirs", 
image_url: "https://images-na.ssl-images-amazon.com/images/I/51+nWrc2tCL._SX329_BO1,204,203,200_.jpg",
author_id: 14)
    
Price.create!( book_id: 14, book_format: "Kindle",  price: 14.99)
Price.create!( book_id: 14, book_format: "Paperback",  price: 10.16)
Price.create!( book_id: 14, book_format: "Hardcopy",  price: 16.69)


Author.create!( 
    name: "Suleika Jaouad",  
    biography: "Suleika Jaouad, is an Emmy Award-winning writer, speaker, cancer survivor and the creator of The Isolation Journals, a global movement cultivating community and creativity during hard times Born in New York City to a Tunisian father and a Swiss mother, Suleika Jaouad's career aspirations as a foreign correspondent were cut short when, at age 22, she was diagnosed with leukemia. She began writing the acclaimed New York Times column and video series from the front lines of her hospital bed, and has since become a fierce advocate for those living with illness and chronic pain. She served on Barack Obama's Presidential Cancer Panel, and her advocacy work, reporting and speaking engagements have brought her everywhere from the main stage of TED, the United Nations and Capitol Hill to a maximum security prison and a two-room schoolhouse in rural Montana. When she's not on the road with her 1972 Volkswagen camper van and rescue dog Oscar, she lives in Brooklyn."
)  
Book.create!(
    title: "Between Two Kingdoms: A Memoir of a Life Interrupted",
    description: "In the summer after graduating from college, Suleika Jaouad was preparing, as they say in commencement speeches, to enter “the real world.” She had fallen in love and moved to Paris to pursue her dream of becoming a war correspondent. The real world she found, however, would take her into a very different kind of conflict zone. It started with an itch—first on her feet, then up her legs, like a thousand invisible mosquito bites. Next came the exhaustion, and the six-hour naps that only deepened her fatigue. Then a trip to the doctor and, a few weeks shy of her twenty-third birthday, a diagnosis: leukemia, with a 35 percent chance of survival. Just like that, the life she had imagined for herself had gone up in flames. By the time Jaouad flew home to New York, she had lost her job, her apartment, and her independence. She would spend much of the next four years in a hospital bed, fighting for her life and chronicling the saga in a column for The New York Times. When Jaouad finally walked out of the cancer ward—after countless rounds of chemo, a clinical trial, and a bone marrow transplant—she was, according to the doctors, cured. But as she would soon learn, a cure is not where the work of healing ends; it’s where it begins. She had spent the past 1,500 days in desperate pursuit of one goal—to survive. And now that she’d done so, she realized that she had no idea how to live. How would she reenter the world and live again? How could she reclaim what had been lost? Jaouad embarked—with her new best friend, Oscar, a scruffy terrier mutt—on a 100-day, 15,000-mile road trip across the country. She set out to meet some of the strangers who had written to her during her years in the hospital: a teenage girl in Florida also recovering from cancer; a teacher in California grieving the death of her son; a death-row inmate in Texas who’d spent his own years confined to a room. What she learned on this trip is that the divide between sick and well is porous, that the vast majority of us will travel back and forth between these realms throughout our lives. Between Two Kingdoms is a profound chronicle of survivorship and a fierce, tender, and inspiring exploration of what it means to begin again.",
    publication_date: "February 9, 2021",
    category: "Biographies & Memoirs", 
    image_url: "https://images-na.ssl-images-amazon.com/images/I/417fYqloHKL._SX329_BO1,204,203,200_.jpg",
    author_id: 15)

Price.create!( book_id: 15, book_format: "Kindle",  price: 13.99)
Price.create!( book_id: 15, book_format: "Hardcopy",  price: 18.24, discount: true)
                   
                
Author.create!( 
    name: "Crystal Radke",  
    biography: "In an era where we are less focused on writing and more focused on typing, Crystal provides a fantastic resource for young children who are learning how to write. This book provides the exercises necessary to get a strong start in letter and number formation and introduces children to shapes, numbers, and letters in a fun and engaging way")

Book.create!(
    title: "My First Learn to Write Workbook: Practice for Kids with Pen Control, Line Tracing, Letters, and More!",
    category:"Children's Books",  
    description: "This handwriting activity book includes:75+ Practice pages―Tons of engaging pencil-on-paper activities like connect-the-dots and fill-in-the-blanks offer enough repetition for real learning but enough variety to keep kids interested.
    Comprehensive skill-building―As they explore these exercises, kids will build a strong foundation of reading comprehension, penmanship, and fine motor skills.
    Colorful fun―This workbook is full of helpful (and silly) pictures and illustrations that will spark kids’ imaginations and get them excited to keep practicing.
    Get your little one on the path to success with an interactive book that helps them master early learning skills.",
    publication_date: "August 27, 2019",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/516Bwd1ubwL._SX384_BO1,204,203,200_.jpg",
    author_id: 16)

Price.create!( book_id: 16, book_format: "Hardcopy",  price: 11.55)
Price.create!( book_id: 16, book_format: "Kindle",  price: 6.99, discount: true)
Price.create!( book_id: 16, book_format: "Paperback",  price: 8.24)
                    
                                    
                                      
Author.create!( 
    name: "James Patterson",  
    biography: "James Patterson is the world's bestselling author. The creator of Alex Cross, he has produced more enduring fictional heroes than any other novelist alive. He lives in Florida with his family."
)

Book.create!(
    title: "Walk in My Combat Boots: True Stories from America's Bravest Warriors",
    category:"History",  
    description: "These are the brutally honest stories usually only shared amongst comrades in arms. Here, in the voices of the men and women who’ve fought overseas from Vietnam to Iraq and Afghanistan, is a rare eye-opening look into what wearing the uniform, fighting in combat, losing friends and coming home is really like. Readers who next thank a military member for their service will finally have a true understanding of what that thanks is for",
    publication_date: "February 8, 2021",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51CgmsYS+2L._SX320_BO1,204,203,200_.jpg",
    author_id: 17)

Price.create!( book_id: 17, book_format: "Paperback",  price: 17.24)
Price.create!( book_id: 17, book_format: "Kindle",  price: 15.99)
Price.create!( book_id: 17, book_format: "Hardcopy",  price: 30.55)
                    
Author.create!( 
    name: "Christopher Hart ",  
    biography: "Christopher Hart is the leading author of art instruction books in the US. His books have sold more than six million copies, and his titles frequently appear on the Bookscan Top 50 Art list. They also have a huge international audience, having been translated into more than 20 languages."
)

Book.create!(
    title: "The Master Guide to Drawing Anime: How to Draw Original Characters from Simple Templates (Volume 1)",
    category:"Teens & Toung Adult",  
    description: "Nothing brings anime artists more satisfaction than creating original characters to use in a comic strip or graphic novel. Bestselling how-to-draw author Christopher Hart helps them reach this goal by providing insight into the six most popular anime types: schoolgirls, schoolboys, preteens, vengeful bad guys, humorous personalities, and fantasy figures. ",
    publication_date: "July 7, 2015",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/61OmpoczgeL._SX449_BO1,204,203,200_.jpg",
    author_id: 18)

Price.create!( book_id: 18, book_format: "Kindle",  price: 8.99)
Price.create!( book_id: 18, book_format: "Paperback",  price: 17.24)
Price.create!( book_id: 18, book_format: "Hardcopy",  price: 28.69, discount: true)
                    
Author.create!( 
    name: "Robert Kiyosaki",  
    biography: "Robert Kiyosaki, author of Rich Dad Poor Dad - the international runaway bestseller that has held a top spot on the New York Times bestsellers list for over six years - is an investor, entrepreneur and educator whose perspectives on money and investing fly in the face of conventional wisdom. He has, virtually single-handedly, challenged and changed the way tens of millions, around the world, think about money.In communicating his point of view on why 'old' advice - get a good job, save money, get out of debt, invest for the long term, and diversify - is 'bad' (both obsolete and flawed) advice, Robert has earned a reputation for straight talk, irreverence and courage."
)

Book.create!(
    title: "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
    category:"Business & Investing",  
    description: "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
    publication_date: "April 11, 2017",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg",
    author_id: 19)

Price.create!( book_id: 19, book_format: "Paperback",  price: 10.11, discount: true)
Price.create!( book_id: 19, book_format: "Hardcopy",  price: 21.99)

Author.create!( 
    name: "Colleen Hoover",  
    biography: "Colleen Hoover is the #1 New York Times bestselling author of Slammed, This Girl, Point of Retreat, Hopeless, Losing Hope, Finding Cinderella, Maybe Someday, Ugly Love, Maybe Not, Confess and November 9."
)

Book.create!(
    title: "It Ends with Us: A Novel",
    category:"Romance",  
    description: "Combining a captivating romance with a cast of all-too-human characters, Colleen Hoover’s It Ends With Us is an unforgettable tale of love that comes at the ultimate price.",
    publication_date: "August 2, 2016",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/517s9eYVoHS._SX320_BO1,204,203,200_.jpg",
    author_id: 20)

Price.create!( book_id: 20, book_format: "Hardcopy",  price: 18.39)
                    
       

Review.create!(
    title: "Those Ellen DeGeneres Letters",
    body: "It Ends With Us is my 2nd read. This is a very different read, it's a tale of difficult love. I was recommended this after reading Bright Side. This is nowhere near the power of Kim Holden's novel because it's on a much lower level of emotion.
    A different novel altogether.",
    rating: 4,
    user_id: 6,
    book_id: 20)

Review.create!(
    title: "Everything",
    body: " read this book about 11 years ago at 27 years old , had no money, I followed the advice in this book and now have 15 rental properties paid off free and clear, my assets more than cover all my expenses. I just bought this book again, I'm in the middle of reading it again now 11 years later and can't put it down. I hate reading btw. I plan on reading this book at least three more times over the next 20 years so I can keep all info fresh in my mind. People always ask me about success. I tell them to read this book...whats crazy is that they don't read it.",
    rating: 5,
    user_id: 1,
    book_id: 19)

Review.create!(
    title: "Dangerous Sophistry",
    body: "Nobody can dispute that race relations in the US have some distance to go before reaching an acceptable parity. Equally nobody, looking at US history since the civil war, could deny there has been huge progress.",
    rating: 2,
    user_id: 3,
    book_id: 7)

Review.create!(
    title: "Not much here",
    body: "I was already reading the hard copy full-length book but though it had too much detail. So I bought this cliff notes version written by the same author. This is a 30 minute read--hits the topics but without enough detail to do more than identify them. Too expensive for a mini-version of the book. I would look maybe for some else's summary and analysis?",
    rating: 3,
    user_id: 2,
    book_id: 8)


Review.create!(
    title: "one of the Great Books",
    body: "I must say this book is at par. Right from the 1st line, this 400-odd pages book gets over you. The writer has written this book simply keeping the american sociology and psychology at prime focus.",
    rating: 4,
    user_id: 3,
    book_id: 9)
               
Review.create!(
    title: "Tough Read for Some",
    body: "Wow!! I really loved her first book but I cannot say that about Caste. The first chapter is so biased towards the left it's laughable and I'm libertarian. I cannot recommend this book to anyone and if I could give it negative stars I would. How can we mend our country when you only see the speck in someone else's eye and not the log in your own. So sad.",
    rating: 5,
    user_id: 4,
    book_id: 14)

Review.create!(
    title: "A must read!",
    body: "The Warmth of Other Suns was one of the most important books I’ve read. So, I was really looking forward to Caste. When I previously thought of castes, I thought only of India. Wilkerson posits that the Third Reich was also a caste system. And, of course, the US.",
    rating: 5,
    user_id: 4,
    book_id: 13)


Review.create!(
    title: "To me that means it was a good book, nothing special but worth the price paid",
    body: "I am giving this book a 3 star rating. To me that means it was a good book, nothing special but worth the price paid. I read some of the reviews of other GR members and it appears that some were rather disappointed in this book for a variety of reasons. I guess I can understand that feeling as I too was initially disappointed. I have visited Biltmore a couple of times but my last visit was nearly 20 years ago and curiosity got the better of me so I Googled the site and discovered that things have changed considerably since my last visit. ",
    rating: 3,
    user_id: 5,
    book_id: 17)

Review.create!(
    title: "Great Summary Foregrounds Details in Original Work",
    body: "Not your standard summary. Actually gives you a fresh way to look at the arguments in the source. Kinda poetic",
    rating: 5,
    user_id: 5,
    book_id: 16)

Review.create!(
    title: "A really good read",
    body: "A really good read, well written and only wish I had read this book before visiting Biltmore.",
    rating: 5,
    user_id: 6,
    book_id: 18)

Review.create!(
    title: "Wonderful Evocative Read",
    body: "Whether you grew up in the south during the times this author did, or are just learning the history of these times, you could not find a book truer to what it was like to be a white girl of her age living in a small town.",
    rating: 4,
    user_id: 6,
    book_id: 11)

Review.create!(
    title: "Misses a lot of points",
    body: "Writing was succinct and grammatically correct, but misses loads of topics. I expected at least 20 full pages when the book had 500. Disappointing.",
    rating: 2,
    user_id: 6,
    book_id: 14)
               
Review.create!(
    title: "beautifully written, reminded me of Downton Abby",
    body: "Very well researched, beautifully written, reminded me of Downton Abby in its description of the times, places and People. I highly recommend this Book. I have visited the Biltmore Estate, this Book has inspired me to tour the Estate again.",
    rating: 5,
    user_id: 3,
    book_id: 12)

Review.create!(
    title: "Intriguing book",
    body: "The more of this book I read, the greater my feeling was that it's actually 'a primer for action', for instance, Climate Extinction. So don't give it to your tweenager or you might find things happening that you don't expect... Or maybe it would get them off the couch?",
    rating: 5,
    user_id: 2,
    book_id: 3)

Review.create!(
    title: "Uplifting, inspiring and very entertaining.",
    body: "This was a a rousing call to arms as far as I am concerned and it really fired me up by suggesting all sorts of ways that I could make some kind of impact in these troubled times.
    As well as this, it was a great, uplifting read, not heavy going but romantic. It rekindled memories of some of Tom Robbins' work and I have always been a sucker for that.",
    rating: 5,
    user_id: 5,
    book_id: 4)

Review.create!(
    title: "I would definitely recommend this book",
    body: "Interesting, pertinent and inspiring, but i guess this book would not be to everyone's taste. It has taken longer to read than i expected, but was gripping. I hoped for more content about environmental protection - this is a book largely about people and peaceful revolution. Full of conspiracy theories - or are they the truth?",
    rating: 4,
    user_id: 2,
    book_id: 5)

Review.create!(
    title: "Too much fluff with no substance",
    body: "I can't stand this book and would have never have finished it if it wasn't assigned to me for a class. Even then I tried to skip reading it by looking for sparknotes about it, sadly there was none. I will preface my actual review by saying that I enjoy reading. I try to read at least 2 books a month and if I find a series I actually enjoy it will be many more.",
    rating: 2,
    user_id: 1,
    book_id: 15)

Review.create!(
    title: "5.0 out of 5 stars Awesome true story. Very inspiring and hard to put down!",
    body: "A perfect book for summer reading because you will not want to put it down! I recommend this book for everyone but especially for younger Americans who might not have been taught proper history. If I could afford it I would hand this book to every young person I see carelessly wearing a Che t-shirt or who spout that communism has some virtue. Virginia Prodan lived to tell us about what it is really like to live under communism - dangerous, stifling, robotic....anything but free . ",
    rating: 5,
    user_id: 4,
    book_id: 10)

Review.create!(
    title: "Outstanding Story!",
    body: "What an amazing and beautiful story! Virginia Prodan overcame tremendous obstacles and suffered so much at the hands of her parents. However this pain seemed to spur her on to accomplish great things.
    Thank you for sharing your story, Ms Prodan. You are truly a woman of great character and I enjoyed every page of your book. You are a brilliant woman and your strength and determination are inspiring.",
    rating: 5,
    user_id: 2,
    book_id: 10)

Review.create!(
    title: "Faith in Action",
    body: "This memoir was fascinating, frightening and faith filled. What an amazing and courageous life Virginia has led. Highly recommended.",
    rating: 4,
    user_id: 5,
    book_id: 6)

Review.create!(
    title: "2.0 out of 5 stars The work felt like a loose first draft",
    body: "Here's the truth: I wanted to put down this book so many times, but finally I willed myself and I didn't. The story is there - a life filled with hardships, the lack of a real childhood, a woman's strength to stand up for what she believes in in a country run by a ruthless dictator. I'd hoped to get more, a lot more, from what it meant to live in that system. I was born there too.",
    rating: 2,
    user_id: 3,
    book_id: 6)