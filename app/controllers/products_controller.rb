require 'pry'
class ProductsController < ApplicationController
  respond_to :json

  def index
    @products = Product.all

    @products.each do |product|
      if product.active_highlight?
        product.highlight = true
        product.save
      else
        product.highlight = false
        product.save
      end
    end

    ordered_products = @products.order(:created_at)
    render json: ordered_products
  end

  def create
    @product = Product.new(product_params)
    @product.photo = decode_base64
    @product.save
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
    params.require(:product).permit(:id, :name, :highlight, :start_date, :end_date)
  end
end
