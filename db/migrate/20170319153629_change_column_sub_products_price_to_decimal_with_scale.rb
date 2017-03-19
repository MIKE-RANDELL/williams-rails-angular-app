class ChangeColumnSubProductsPriceToDecimalWithScale < ActiveRecord::Migration[5.0]
  def change
    remove_column :sub_products, :price
  end
end
