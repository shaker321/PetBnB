class Api::LocationsController < ApplicationController
  def show
    @location = Location.find(params[:id]);

    if @location
      render :show
    else
      render json: ["We're expanding our network, but haven't made it there yet."], status: 404
    end
  end

  def index
    @locations = Location.all
  end
end
