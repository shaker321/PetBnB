const AppDispatcher = require("../dispatcher/dispatcher");
const LocationConstants = require("../constants/location_constants");
const LocationApiUtil = require("../util/location_api_util");

const LocationActions = {
  fetchAllLocations() {
    LocationApiUtil.fetchAllLocations(LocationActions.receiveAllLocations);
  },

  fetchSingleLocation(location) {
    LocationApiUtil.fetchSingleLocation(location, LocationActions.receiveSingleLocation);
  },

  receiveAllLocations(locations) {
    AppDispatcher.dispatch({
      actionType: LocationConstants.LOCATIONS_RECEIVED,
      locations: locations
    });
  },

  receiveSingleLocation(location) {
    AppDispatcher.dispatch({
      actionType: LocationConstants.LOCATION_RECEIVED,
      location: location
    });
  }
};

module.exports = LocationActions;
