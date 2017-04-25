class EstimatesController < ApplicationController
  #skip_before_filter :verify_authenticity_token, :only => [:create]
  def index
    @estimates = Estimate.all
    render json: @estimates
  end

  def create
    @estimate = Estimate.create(estimate_params)
    render json: @estimate
  end

  private

  def estimate_params
    params.require(:estimate).permit(:name, :phone, :city, :street_address, :zipcode, :details)
  end
end
