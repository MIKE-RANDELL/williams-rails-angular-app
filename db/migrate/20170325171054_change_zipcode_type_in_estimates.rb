class ChangeZipcodeTypeInEstimates < ActiveRecord::Migration[5.0]
  def change
    change_column :estimates, :zipcode, :string
  end
end
