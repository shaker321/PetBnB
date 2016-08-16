const React = require("react");
const Link = require("react-router").Link;
const SessionActions = require("../actions/session_actions");
const SessionStore = require("../stores/session_store");
const hashHistory = require("react-router").hashHistory;
const NavBar = require("./nav_bar");
const MainPage = require("./main_page");

const App = React.createClass({
  render() {
    return(
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
});
module.exports = App;
