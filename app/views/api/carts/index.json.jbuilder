@carts.each do |cart|
    json.set! cart.id do
        json.extract! cart, :id, :user_id, :book_id, :price_id, :quantity, :created_at
    end
end