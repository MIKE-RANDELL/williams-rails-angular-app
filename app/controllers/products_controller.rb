class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products
  end

  def create
    @product = Product.create(product_params)
    render json: @product
  end

  def show
    @product = Product.find(params[:id])
    if @product.save
      render json: {status: 'ok'}
    else
      render json:
        { errors: @product.errors.full_messages },
        status: :unprocessable_entity
    end
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
