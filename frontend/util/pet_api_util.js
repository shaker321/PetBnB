const PetApiUtil = {
  fetchAllPets(success, bounds, filters) {
    $.ajax({
      url: "/api/pets",
      type: "GET",
      data: {bounds: bounds, filters: filters},
      success: function(data) {
        success(data);
      }
    });
  },

  fetchSinglePet(id, success) {
    $.ajax({
      url: "/api/pets/" + id,
      type: "GET",
      success: function(data) {
        success(data);
      }
    });
  },

  createPet(pet, success) {
    $.ajax({
      url: "/api/pets",
      type: "POST",
      contentType: false,
      processData: false,
      data: pet,
      success: function(data) {
        success(data);
      }
    });
  },

  createReview(review, success, clearText) {
    $.ajax({
      url: "/api/reviews",
      type: "POST",
      data: review,
      success: function(data) {
        success(data);
        clearText();
      }
    });
  },

  createBooking(booking, success, success2, error) {
    $.ajax({
      url: "/api/bookings",
      type: "POST",
      data: booking,
      success: function(data) {
        success();
        success2(data);
      },
      error: function(xhr) {
        error("booking", xhr.responseJSON);
      }
    });
  }
};

module.exports = PetApiUtil;
