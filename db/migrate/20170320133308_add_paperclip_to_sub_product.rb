class AddPaperclipToSubProduct < ActiveRecord::Migration[5.0]
  def change
    add_attachment :sub_products, :photo
  end
end
