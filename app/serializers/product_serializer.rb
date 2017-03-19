class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description
  has_many :sub_products
end
