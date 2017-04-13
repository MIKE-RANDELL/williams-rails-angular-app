require 'pry'
class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
    render json: @tweets
  end

  def create
    @tweet = Tweet.new(tweet_params)
    @tweet.content = params[:product_name] + ", best from Williams Soils and Sod! Check them out at williamssoilsandsod.com"
    @tweet.save
  end

  private

  def tweet_params
    params.require(:tweet).permit(:product_id)
  end
end
