class CreateEstimates < ActiveRecord::Migration[5.0]
  def change
    create_table :estimates do |t|
      t.integer :user_id
      t.string :name
      t.string :phone
      t.string :city
      t.string :street_address
      t.integer :zipcode
      t.string :details

      t.timestamps
    end
  end
end
