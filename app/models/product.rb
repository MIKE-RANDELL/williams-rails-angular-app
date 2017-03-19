class Product < ApplicationRecord
  has_attached_file :photo, styles: {original: '700x700#'}
  validates_attachment_content_type :photo, content_type:     /\Aimage\/.*\Z/
  has_many :sub_products
end
