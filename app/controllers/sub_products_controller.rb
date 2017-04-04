require 'pry'
class SubProductsController < ApplicationController
  def index
    @sub_products = SubProduct.all
    render json: @sub_products
  end

  def show_sub_products
    product = Product.find(params[:id])
    @sub_products = product.sub_products
    ordered_sub_products = @sub_products.order(:created_at) #to keep original order when a sub product is updated
    render json: ordered_sub_products
  end

  def create
    @sub_product = SubProduct.new(sub_product_params)
    @sub_product.photo = decode_base64
    @sub_product.save
    render json: @sub_product
  end

  def decode_base64
    decoded_data = Base64.decode64(params[:sub_product][:picture][:image][:base64])
    data = StringIO.new(decoded_data)
    data
  end

  def update
    @sub_product = SubProduct.find(params[:sub_product][:id])
    @sub_product.update_attributes(sub_product_params)
    if @sub_product.save
      render json: @sub_product
    else
      console.log('error')
    end
  end

  private

  def sub_product_params
    params.require(:sub_product).permit(:name, :description, :price, :product_id)
  end
end
