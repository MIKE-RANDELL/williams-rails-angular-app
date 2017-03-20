class Product < ApplicationRecord
  has_attached_file :photo, styles: {original: '500x300#'}
  validates_attachment_content_type :photo, content_type:     /\Aimage\/.*\Z/
  has_many :sub_products
end
