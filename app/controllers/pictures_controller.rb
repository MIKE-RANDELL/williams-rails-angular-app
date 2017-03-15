require 'pry'
class PicturesController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def index
    @pictures = Picture.all
    #binding.pry
    render json: @pictures
  end

  def create
    #binding.pry
    @picture = Picture.create(title: 'a title', photo: decode_base64)
    render json: @picture
  end

  def decode_base64
    decoded_data = Base64.decode64(params[:image][:base64])
    data = StringIO.new(decoded_data)
    data
  end

  def show
    @picture = Picture.find(params[:id])
    if @picture.save
      render json: {status: 'ok'}
    else
      render json:
        { errors: @picture.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  def update
    @picture = Picture.find(params[:id])
    if @picture.update(picture_params)
      render json: {status: 'ok'}
    else
      render json:
        { errors: @picture.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  private

  def picture_params
    params.require(:pictures).permit(:description, :picture)
  end
end
