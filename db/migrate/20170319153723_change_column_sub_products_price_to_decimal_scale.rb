class ChangeColumnSubProductsPriceToDecimalScale < ActiveRecord::Migration[5.0]
  def change
    add_column :sub_products, :price, :decimal, :precision => 8, :scale => 2
  end
end
