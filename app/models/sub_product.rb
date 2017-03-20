class SubProduct < ApplicationRecord
  has_attached_file :photo, styles: {original: '700x500#'}
  validates_attachment_content_type :photo, content_type:     /\Aimage\/.*\Z/
  belongs_to :product
end
