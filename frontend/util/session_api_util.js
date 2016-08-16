const SessionApiUtil = {
  logIn(close, user, success, error, closeDropDown) {
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: {user: user},
      success: function(data) {
        success(data);
        close();
        closeDropDown();
      },
      error: function(xhr) {
        error("login", xhr.responseJSON);
      }
    });
  },

  logOut(success) {
    $.ajax({
      url: "/api/session",
      type: "DELETE",
      success: function(data) {
        success(data);
      },
      error: function() {
        console.log("Logout error in SessionApiUtil#logout");
      }
    });
  },

  signUp(close, user, success, error, closeDropDown) {
    $.ajax({
      url: "/api/users",
      type: "POST",
      dataType: "json",
      data: {user: user},
      success: function(data) {
        success(data);
        close();
        closeDropDown();
      },
      error: function(xhr) {
        error("signup", xhr.responseJSON);
      }
    });
  }
};

module.exports = SessionApiUtil;
