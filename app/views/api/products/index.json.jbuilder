@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :name, :description, :price, :image, :seller_id
    end
end
