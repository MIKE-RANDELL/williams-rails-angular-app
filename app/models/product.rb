require 'pry'
class Product < ApplicationRecord
  has_attached_file :photo, styles: {original: '500x300#'}
  validates_attachment_content_type :photo, content_type:     /\Aimage\/.*\Z/
  validate :active_highlight?
  has_many :sub_products
  has_many :tweets

  def active_highlight?
    if start_date && end_date
      start_date <= DateTime.now && end_date >= DateTime.now
    else
      return false
    end
  end
end
