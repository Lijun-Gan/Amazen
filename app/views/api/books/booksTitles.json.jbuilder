
json.items do 
    json.array! @books do |book|

        json.id book.id
        json.title book.title

    end 
end
