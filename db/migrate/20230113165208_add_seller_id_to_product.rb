class AddSellerIdToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :seller_id, :string
  end
end
