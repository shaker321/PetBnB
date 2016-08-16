const React = require("react");
const LocationStore = require("../stores/location_store");
const hashHistory = require("react-router").hashHistory;
const Search = require("./search");
const LocationActions = require("../actions/location_actions");

const LocationIndexItem = React.createClass({
  handleClick() {
    LocationActions.fetchSingleLocation(this.props.location);
    hashHistory.push("/locations/" + this.props.location.id);
  },

  render() {
    return (
      <div>
        <button
          className={"location-index-item-" + this.props.location.name}
          onClick={this.handleClick}>
          {this.props.location.name}
        </button>
      </div>
    );
  }

});

module.exports = LocationIndexItem;
