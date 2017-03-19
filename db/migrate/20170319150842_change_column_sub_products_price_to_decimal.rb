class ChangeColumnSubProductsPriceToDecimal < ActiveRecord::Migration[5.0]
  def change
    change_column(:sub_products, :price, :decimal)
  end
end
