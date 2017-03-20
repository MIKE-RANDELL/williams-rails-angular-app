class SubProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :photo
  belongs_to :product
end
