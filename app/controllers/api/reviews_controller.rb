class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def create
    @review = Review.new(review_params)
    @review.username = User.find(review_params[:user_id])

    if @review.save
      @pet = @review.pet
      render "api/pets/show"
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body, :pet_id, :user_id)
  end
end
