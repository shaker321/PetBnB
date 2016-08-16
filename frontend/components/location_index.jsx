const React = require("react");
const LocationStore = require("../stores/location_store");
const LocationActions = require("../actions/location_actions");
const LocationIndexItem = require("./location_index_item");

const LocationIndex = React.createClass({
  componentDidMount() {
    this.locationListener = LocationStore.addListener(this.forceUpdate.bind(this));
    LocationActions.fetchAllLocations();
  },

  componentWillUnmount() {
    this.locationListener.remove();
  },

  render() {
    const locations = LocationStore.all();
    const locationKeys = Object.keys(locations);

    let locales = locationKeys.map(
      (key) =>
        {return (
          <LocationIndexItem
            location={locations[key]}
            key={key}/>);
        }
    );

    return (
      <div className="location-index">
        {locales}
      </div>
    );

  }
});

module.exports = LocationIndex;
