require 'pry'
class ReviewsController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => [:create]
  def index
    @reviews = Review.all
    render json: @reviews
  end

  def create
    @review = Review.create(review_params)
    render json: @review
  end

  private

  def review_params
    params.require(:review).permit(:name, :review)
  end
end
