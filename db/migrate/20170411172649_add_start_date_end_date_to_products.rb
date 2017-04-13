class AddStartDateEndDateToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :start_date, :datetime
    add_column :products, :end_date, :datetime
  end
end
