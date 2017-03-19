class RemoveDescriptionPriceFromProducts < ActiveRecord::Migration[5.0]
  def change
    remove_column :products, :price
    remove_column :products, :description
  end
end
