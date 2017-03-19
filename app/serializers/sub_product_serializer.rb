class SubProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price
  belongs_to :product
end
