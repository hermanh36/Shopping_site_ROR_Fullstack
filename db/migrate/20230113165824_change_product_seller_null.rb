class ChangeProductSellerNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null(:products, :seller_id, false)
  end
end
