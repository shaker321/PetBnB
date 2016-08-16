const React = require("react");
const Link = require("react-router").Link;
const SessionActions = require("../actions/session_actions.js");
const SessionStore = require("../stores/session_store.js");
const hashHistory = require("react-router").hashHistory;
const LocationIndex = require("./location_index");
const LocationStore = require("../stores/location_store");
const LocationActions = require("../actions/location_actions");

const MainPage = React.createClass({
  render() {
    return(
      <div className="main-page">
        <div className="main-page-image">
          <h1 className="main-page-title">PetBnB</h1>
          <h3 className="main-page-description">Rent an adorable new friend without all of the responsibility.</h3>
          <Link to="/api/pets" className="main-page-link">Find a Friend</Link>
        </div>
        <LocationIndex/>
      </div>
    );
  }
});
module.exports = MainPage;
