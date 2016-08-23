const React = require("react");
const hashHistory = require("react-router").hashHistory;

const SearchLocationsBar = React.createClass({
  getInitialState() {
    return {text: "Search By Location"};
  },

  componentDidMount() {
    let input = document.getElementById("search-locations-bar");

    input.value = "";

    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(this.autocomplete, "place_changed", this._handleSubmit);
  },

  componentWillUnmount() {
    this.autocompleteListener.remove();
    this.componentDidMount();
  },

  _handleSubmit(e) {
    const address = this.autocomplete.getPlace();

    const coords = {
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng()
    };

    hashHistory.push("/locations/1");

    hashHistory.push({
      pathname: "/api/pets",
      query: coords
    });

    this.componentWillUnmount();
  },

  render() {
    return (
      <div>
        <div className="magnifying-glass"/>
        <input
          type="text"
          id="search-locations-bar"
          className="search-locations-bar"
          placeholder={this.state.text}
        />
      </div>
    );
  }
});

module.exports = SearchLocationsBar;
