const AppDispatcher = require("../dispatcher/dispatcher");
const PetConstants = require("../constants/pet_constants");
const PetApiUtil = require("../util/pet_api_util");
const ErrorActions = require("./error_actions");

const PetActions = {
  fetchAllPets(bounds, filters = {minPrice: 5, maxPrice: 25}) {
    PetApiUtil.fetchAllPets(PetActions.receiveAllPets, bounds, filters);
  },

  fetchSinglePet(petId) {
    PetApiUtil.fetchSinglePet(petId, PetActions.receiveSinglePet);
  },

  createPet(pet) {
    PetApiUtil.createPet(pet, PetActions.receiveSinglePet);
  },

  createReview(review, clearText) {
    PetApiUtil.createReview(review, PetActions.receiveSinglePet, clearText);
  },

  createBooking(booking, success) {
    PetApiUtil.createBooking(booking, success, PetActions.receiveSinglePet, ErrorActions.setErrors);
  },

  receiveAllPets(pets) {
    AppDispatcher.dispatch({
      actionType: PetConstants.PETS_RECEIVED,
      pets: pets
    });
  },

  receiveSinglePet(pet) {
    AppDispatcher.dispatch({
      actionType: PetConstants.PET_RECEIVED,
      pet: pet
    });
  },

};

module.exports = PetActions;
