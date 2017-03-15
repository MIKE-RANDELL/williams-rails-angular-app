class Picture < ApplicationRecord
  has_attached_file :photo, styles: {original: '400x400>'}
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
end
