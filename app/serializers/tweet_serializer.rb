class TweetSerializer < ActiveModel::Serializer
  attributes :id, :content
  belongs_to :product #leave this in here for now, experiment..
end
