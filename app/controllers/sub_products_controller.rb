require 'pry'
class SubProductsController < ApplicationController
  def index
    @sub_products = SubProduct.all
    render json: @sub_products
  end

  def show_sub_products
    product = Product.find(params[:id])
    @sub_products = product.sub_products
    render json: @sub_products
  end

  def create
    @sub_product = SubProduct.create(sub_product_params)
    render json: @sub_product
  end

  private

  def sub_product_params
    params.require(:sub_product).permit(:name, :description, :price)
  end
end
