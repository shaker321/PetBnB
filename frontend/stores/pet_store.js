const AppDispatcher = require("../dispatcher/dispatcher.js");
const Store = require("flux/utils").Store;
const PetConstants = require("../constants/pet_constants");

const PetStore = new Store(AppDispatcher);

let _pets = {};
let _reviews = {};
let _bookings = {};

function _resetAllPets(pets) {
  _pets = {};

  pets.forEach(
    (pet) =>
      {_pets[pet.id] = pet;}
  );
}

function _resetSinglePet(pet) {
  _pets[pet.id] = pet;
}

function _updateReviews(review) {
  if (_reviews[review.pet_id]) {
    _reviews[review.pet_id].push(review);
  } else {
    _reviews[review.pet_id] = [review];
  }
}

function _updateBookings(booking) {
  if (_bookings[booking.pet_id]) {
    _bookings[booking.pet_id].push(booking);
  } else {
    _bookings[booking.pet_id] = [booking];
  }
}

PetStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PetConstants.PETS_RECEIVED:
      _resetAllPets(payload.pets);
      PetStore.__emitChange();
      break;
    case PetConstants.PET_RECEIVED:
      _resetSinglePet(payload.pet);
      PetStore.__emitChange();
      break;
  }
};

PetStore.reviews = function(petId) {
  return _reviews[petId];
};

PetStore.bookings = function(petId) {
  return _bookings[petId];
};

PetStore.all = function() {
  return Object.assign({}, _pets);
};

PetStore.find = function(id) {
  return Object.assign({}, _pets[id]);
};

module.exports = PetStore;
