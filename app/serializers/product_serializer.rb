class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :photo
  has_many :sub_products
end
