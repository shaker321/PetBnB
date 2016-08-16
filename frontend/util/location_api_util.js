const LocationApiUtil = {
  fetchAllLocations(success) {
    $.ajax({
      url: "/api/locations",
      type: "GET",
      success: function(data) {
        success(data);
      },
    });
  },

  fetchSingleLocation(location, success) {
    $.ajax({
      url: "/api/locations/" + location.id,
      type: "GET",
      success: function(data) {
        success(data);
      },
    });
  }
};

module.exports = LocationApiUtil;
