require 'pry'
class ProductsController < ApplicationController
  respond_to :json

  def index
    @products = Product.all
    render json: @products
  end

  def create
    binding.pry
    @product = Product.create(product_params)
    render json: @product
  end

  def show #altered to include sub-products
    @product = Product.find(params[:id])
    binding.pry
    render json: @product
    #if @product.save
    #  render json: {status: 'ok'}
    #else
    #  render json:
    #    { errors: @product.errors.full_messages },
    #    status: :unprocessable_entity
    #end
  end

  def show_sub_products
    product = Product.find(params[:id])
    @sub_products = product.sub_products
    render json: @sub_products
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
    params.require(:product).permit(:name, :description, :price)
  end
end
