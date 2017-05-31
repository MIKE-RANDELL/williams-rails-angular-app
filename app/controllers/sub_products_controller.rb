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
    supload
    @sub_product.photo = decode_base64
    @sub_product.save
    render json: @sub_product
  end

  def decode_base64
    decoded_data = Base64.decode64(params[:sub_product][:picture][:image][:base64])
    data = StringIO.new(decoded_data)
    data
  end

  def supload
    s3 = Aws::S3::Object.new(:bucket_name => ENV['S3_BUCKET_NAME'],:key=> ENV['AWS_ACCESS_KEY_ID'],:secret_access_key => ENV['AWS_SECRET_ACCESS_KEY'])
    #bucket = s3.buckets['williamsrailsangular']
    data = Base64.decode64(params[:sub_product][:picture][:image][:base64].to_s)
    #type = params[:contentType].to_s
    #extension = params[:extension].to_s
    #name = ('a'..'z').to_a.shuffle[0..7].join #+ ".#{extension}"
    #obj = s3.objects.create(name,data,{acl:"public_read"})
    #url = s3.public_url().to_s
    #render text: url
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
    params.require(:sub_product).permit(:name, :picture, :description, :price, :product_id)
  end
end
