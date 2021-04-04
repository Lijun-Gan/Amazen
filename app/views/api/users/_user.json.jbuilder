# wishlist_ids = []
# cart_ids = []


# user.carts.each do |cart|
#     cart_ids << (cart.id)
# end

# user.wishlists.each do |wishlist|
#     wishlist_ids << (wishlist.id)
# end

# json.user do 
json.extract! user, :username, :id, :email, :phone_number
    # json.cartIds cart_ids
    # json.wishlistIds wishlist_ids
# end

# json.carts do 
#     user.carts.each do |cart|
#         json.set! cart.id do 
#             json.extract! cart, :id, :user_id, :book_id, :quantity,:created_at
#         end
#     end
# end

# json.wishlists do 
#     user.wishlists.each do |wishlist|
#         json.set! wishlist.id do 
#             json.extract! wishlist, :id, :user_id, :book_id,:created_at
#         end
#     end
# end