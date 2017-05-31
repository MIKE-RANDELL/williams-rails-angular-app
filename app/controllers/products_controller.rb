require 'pry'
require 'aws-sdk'
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
    supload
    @product.photo = decode_base64
    @product.save

    render json: @product
  end

  def decode_base64
    decoded_data = Base64.decode64(params[:product][:picture][:image][:base64])
    data = StringIO.new(decoded_data)
    data
  end

  def supload
    s3 = Aws::S3::Object.new(:bucket_name => ENV['S3_BUCKET_NAME'],:key=> ENV['AWS_ACCESS_KEY_ID'],:secret_access_key => ENV['AWS_SECRET_ACCESS_KEY'])
    #bucket = s3.buckets['williamsrailsangular']
    data = Base64.decode64(params[:product][:picture][:image][:base64].to_s)
    #type = params[:contentType].to_s
    #extension = params[:extension].to_s
    name = ('a'..'z').to_a.shuffle[0..7].join #+ ".#{extension}"
    #obj = s3.objects.create(name,data,{acl:"public_read"})
    #url = s3.public_url().to_s
    #render text: url
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
    params.require(:product).permit(:id, :name, :picture, :description, :start_date, :end_date)
  end
end
