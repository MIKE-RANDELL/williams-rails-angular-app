class AddProductIdToSubProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :sub_products, :product_id, :integer
  end
end
