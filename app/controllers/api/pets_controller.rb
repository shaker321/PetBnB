class Api::PetsController < ApplicationController
  def index
    @pets = Pet.in_bounds(params[:bounds][:bounds]).includes(:reviews, :bookings)

    if params[:filters][:desiredSpecies] == "undefined"
      params[:filters][:desiredSpecies] = nil
    end

    if params[:filters][:minPrice] && params[:filters][:maxPrice] && params[:filters][:desiredSpecies]
      @pets = @pets
                .where(price: (params[:filters][:minPrice]..params[:filters][:maxPrice]))
                .where(species: params[:filters][:desiredSpecies])
    elsif (params[:filters][:minPrice] && params[:filters][:maxPrice])
      @pets = @pets.where(price: (params[:filters][:minPrice]..params[:filters][:maxPrice]))
    elsif (params[:filters][:desiredSpecies])
      @pets = @pets.where(species: params[:filters][:desiredSpecies])
    end
  end

  def show
    @pet = Pet.find(params[:id]);

    if @pet
      render :show
    else
      render json: ["Sorry, that pet is not in our database."], status: 404
    end
  end

  def create
    @pet = Pet.new(pet_params)

    if @pet.save
      render :show
    else
      render json: ["Invalid parameters"], status: 422
    end
  end

  private
  def pet_params
    params.require(:pet).permit(
      :name,
      :species,
      :age,
      :breed,
      :temperament,
      :price,
      :lat,
      :lng,
      :user_id,
      :image,
      :minPrice,
      :maxPrice,
      :desiredSpecies
    )
  end
end
