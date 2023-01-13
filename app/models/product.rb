class Product < ApplicationRecord
    validates :name, :price, :description, :image, presence: true

    belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User

end
