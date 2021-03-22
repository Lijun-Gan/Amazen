json.array! @books do |book|
    json.set! book.id do 
        json.extract! book, :title, :image_url
    end
end