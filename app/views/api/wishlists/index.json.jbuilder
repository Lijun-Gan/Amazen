@wishlishs.each do |wishlish|
    json.set! wishlish.id do
        json.extract! wishlish, :user_id, :book_id, :price_id, :created_at
    end
end