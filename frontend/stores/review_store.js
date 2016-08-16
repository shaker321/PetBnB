const AppDispatcher = require("../dispatcher/dispatcher.js");
const Store = require("flux/utils").Store;
const PetConstants = require("../constants/pet_constants");

const PetStore = new Store(AppDispatcher);

let _pets = {};

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

PetStore.all = function() {
  return Object.assign({}, _pets);
};

PetStore.find = function(id) {
  return Object.assign({}, _pets[id]);
};

module.exports = PetStore;
