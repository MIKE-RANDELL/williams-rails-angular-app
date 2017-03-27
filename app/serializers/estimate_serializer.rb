class EstimateSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :city, :street_address, :zipcode, :details, :created_at
end
