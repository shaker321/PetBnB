class Api::BookingsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      @pet = @booking.pet
      @booking.approve!
      render "api/pets/show"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:pet_id, :user_id, :start_date, :end_date, :status)
  end
end
