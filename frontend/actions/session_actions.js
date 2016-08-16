const AppDispatcher = require("../dispatcher/dispatcher");
const SessionConstants = require("../constants/session_constants");
const SessionApiUtil = require("../util/session_api_util");
const ErrorActions = require("./error_actions");

const SessionActions = {
  signUp(formData, close, closeDropDown) {
    SessionApiUtil.signUp(
      close,
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors,
      closeDropDown
    );
  },

  logIn(formData, close, closeDropDown) {
    SessionApiUtil.logIn(
      close,
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors,
      closeDropDown
    );
  },

  logOut() {
    SessionApiUtil.logOut(SessionActions.removeCurrentUser);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }
};

module.exports = SessionActions;
