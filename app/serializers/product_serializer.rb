class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :photo, :highlight, :start_date, :end_date
  has_many :sub_products
  has_many :tweets
end
