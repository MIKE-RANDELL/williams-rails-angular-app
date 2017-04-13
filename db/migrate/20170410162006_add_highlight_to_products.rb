class AddHighlightToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :highlight, :boolean, :default => false
  end
end
