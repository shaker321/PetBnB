const React = require("react");
const Link = require("react-router").Link;
const SessionActions = require("../actions/session_actions");
const SessionStore = require("../stores/session_store");
const ErrorStore = require("../stores/error_store");
const hashHistory = require("react-router").hashHistory;
const LoginForm = require("./login_form");
const PetForm = require("./pet_form");


const DropDownMenu = React.createClass({
  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  _handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    hashHistory.push("/api/pets/post");
  },

  render() {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <div>
          <ul className="drop-down-menu">
            <li><div onClick={this._handleClick} className="drop-down-menu-item-1">Post Your Pet</div></li>
            <li><div onClick={SessionActions.logOut} className="drop-down-menu-item-2">Log Out</div></li>
          </ul>
        </div>
      );
    } else {
      return (null);
    }
  }
});

module.exports = DropDownMenu;
