class Picture < ApplicationRecord
  has_attached_file :photo, styles: {original: '400x400#'} #update sizing when using regular pictures
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
end
