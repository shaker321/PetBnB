const React = require("react");
const Link = require("react-router").Link;
const SessionActions = require("../actions/session_actions");
const SessionStore = require("../stores/session_store");
const ErrorStore = require("../stores/error_store");
const hashHistory = require("react-router").hashHistory;
const LoginForm = require("./login_form");
const Modal = require("react-modal");
const DropDownMenu = require("./drop_down_menu");
const SearchLocationsBar = require("./search_locations_bar");

const NavBar = React.createClass({
  getInitialState() {
    return({modalOpen: false, dropDownOpen: false});
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  closeModal() {
    this.setState({modalOpen: false});
  },

  openModalFromLogin(e) {
    e.preventDefault();
    this.setState({modalOpen: true});
    this.form = "login";
    this.toggle = this.openModalFromSignup;
  },

  openModalFromSignup(e) {
    e.preventDefault();
    this.setState({modalOpen: true});
    this.form = "signup";
    this.toggle = this.openModalFromLogin;
  },

  backToHome(e) {
    e.preventDefault();
    hashHistory.push("/");
  },

  dropDownOn(e) {
    e.preventDefault();
    this.setState({dropDownOpen: true});
  },

  dropDownOff(e) {
    this.setState({dropDownOpen: false});
  },

  render() {
    let buttons = [];

    if (!SessionStore.isUserLoggedIn()) {
      buttons.push(
        <button
          onClick={this.openModalFromLogin}
          key="login-button"
          className="nav-bar-login">Login!
        </button>
      );

      buttons.push(
        <button
          onClick={this.openModalFromSignup}
          key="signup-button"
          className="nav-bar-signup">Sign up!
        </button>
      );

    } else {
      let dropDown = this.state.dropDownOpen ? <DropDownMenu/> : "";

      buttons.push(
        <button
          onClick={this.backToHome}
          onMouseOver={this.dropDownOn}
          onMouseLeave={this.dropDownOff}
          key="email-button"
          className="nav-bar-user"
          >Welcome {SessionStore.currentUser().username}!
          {dropDown}
        </button>
      );
    }

    return(
      <div className="nav-bar">
        <button onClick={this.backToHome} className="nav-bar-link-to-home">PetBnB</button>
        <SearchLocationsBar/>
        {buttons}
        <Modal
          className="modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
          <LoginForm type={this.form} toggle={this.toggle} closeDropDown={this.dropDownOff} close={this.closeModal}/>
        </Modal>
      </div>
    );
  }
});

module.exports = NavBar;
