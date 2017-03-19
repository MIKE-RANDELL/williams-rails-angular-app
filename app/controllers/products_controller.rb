require 'pry'
class ProductsController < ApplicationController
  respond_to :json

  def index
    @products = Product.all
    render json: @products
  end

  def create
    @product = Product.create(name: params[:product][:name], description: params[:product][:description],
                              photo: decode_base64)
    render json: @product
  end

  def decode_base64
    decoded_data = Base64.decode64(params[:product][:picture][:image][:base64])
    data = StringIO.new(decoded_data)
    data
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render json: {status: 'ok'}
    else
      render json:
        { errors: @product.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :description)
  end
end
