const AppDispatcher = require("../dispatcher/dispatcher.js");
const Store = require("flux/utils").Store;
const FilterConstants = require("../constants/filter_constants");

let _params = {minPrice: 5, maxPrice: 25, desiredSpecies: undefined};

const FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function() {
  return Object.assign({}, _params);
};

function _setMinPrice (min) {
  _params.minPrice = min;
}

function _setMaxPrice(max) {
  _params.maxPrice = max;
}

function _setDesiredSpecies(desiredSpecies) {
  _params.desiredSpecies = desiredSpecies;
}

FilterParamsStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FilterConstants.UPDATE_MAX_PRICE:
      _setMaxPrice(payload.maxPrice);
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_MIN_PRICE:
      _setMinPrice(payload.minPrice);
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_DESIRED_SPECIES:
      _setDesiredSpecies(payload.desiredSpecies);
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
