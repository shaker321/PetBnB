const React = require("react");
const Link = require("react-router").Link;
const SessionActions = require("../actions/session_actions.js");
const SessionStore = require("../stores/session_store.js");
const hashHistory = require("react-router").hashHistory;
const ErrorStore = require("../stores/error_store");

const LoginForm = React.createClass({
  getInitialState() {
    return {
      username: "",
      password: ""
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    if ((this.props.type === "login") ||
        (this.state.username === "ilovepuppies@puppies.com" && this.state.password === "i<3puppies")) {
      SessionActions.logIn(this.state, this.props.close, this.props.closeDropDown);
    } else {
      SessionActions.signUp(this.state, this.props.close, this.props.closeDropDown);
    }
  },

  errors() {
    const errors = ErrorStore.errors(this.formType());
    const messages = errors.map(
      (errorMessage, i) => {
        return (<li key={i}>{errorMessage}</li>);
      }
    );

    return (<ul>{messages}</ul>);
  },

  formType() {
    return this.props.type;
  },

  inputHandler(property, e) {
    return (
      (e) =>
        {this.setState({[property]: e.target.value});}
    );
  },

  guestLogin(e) {
    e.preventDefault();

    this.setState({
      username: "ilovepuppies@puppies.com",
      password: "i<3puppies"
    }, this.handleSubmit);

  },

  render() {
    let navLink;
    let text;

    if (this.formType() === "login") {
      text = <h6 className="login-form-text">Don't have an account? </h6>;
      navLink = (<button onClick={this.props.toggle} className="login-form-navLink">Sign up!</button>);
    } else {
      text = <h6 className="login-form-text">Already have an account? </h6>;
      navLink = (<button onClick={this.props.toggle} className="login-form-navLink">Log In!</button>);
    }

    return (
      <div className="login-form-container">

        {this.errors()}

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <input
            type="text"
            value={this.state.username}
            placeholder="Email Address"
            onChange={this.inputHandler("username")}
            className="login-input"
          />

          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.inputHandler("password")}
            className="login-input"
          />

          <input
            type="submit"
            className="login-form-submit"
            value={this.formType().charAt(0).toUpperCase() + this.formType().slice(1)}
          />

          <input
            type="submit"
            className="login-form-submit"
            value="Guest Login"
            onClick={this.guestLogin}
          />

        {navLink}
        {text}
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
