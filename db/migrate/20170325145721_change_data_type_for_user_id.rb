class ChangeDataTypeForUserId < ActiveRecord::Migration[5.0]
  def change
    remove_column :estimates, :user_id
  end
end
