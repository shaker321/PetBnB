const AppDispatcher = require("../dispatcher/dispatcher.js");
const Store = require("flux/utils").Store;
const LocationConstants = require("../constants/location_constants");

const LocationStore = new Store(AppDispatcher);

let _locations = {};
let _bounds = {};

function _resetAllLocations(locations) {
  locations.forEach(
    (location) =>
      {_locations[location.id] = location;}
  );
}

function _resetSingleLocation(location) {
  _locations[location.id] = location;
}

LocationStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case LocationConstants.LOCATIONS_RECEIVED:
      _resetAllLocations(payload.locations);
      LocationStore.__emitChange();
      break;
    case LocationConstants.LOCATION_RECEIVED:
      _resetSingleLocation(payload.location);
      LocationStore.__emitChange();
      break;
  }
};

LocationStore.all = function() {
  return Object.assign({}, _locations);
};

LocationStore.find = function(id) {
  return Object.assign({}, _locations[id]);
};

LocationStore.setBounds = function(bounds) {
  _bounds = bounds;
};

LocationStore.getBounds = function() {
  return Object.assign({}, _bounds);
};

module.exports = LocationStore;
