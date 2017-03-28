class ChangeColumnSubProductsPriceToString < ActiveRecord::Migration[5.0]
  def change
    change_column :sub_products, :price, :string
  end
end
