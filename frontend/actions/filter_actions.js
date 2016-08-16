const AppDispatcher = require("../dispatcher/dispatcher");
const FilterConstants = require("../constants/filter_constants");

const FilterActions = {
  updateMaxPrice(maxPrice) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MAX_PRICE,
      maxPrice: maxPrice
    });
  },

  updateMinPrice(minPrice) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MIN_PRICE,
      minPrice: minPrice
    });
  },

  updateDesiredSpecies(desiredSpecies) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_DESIRED_SPECIES,
      desiredSpecies: desiredSpecies
    });
  }
};

module.exports = FilterActions;
