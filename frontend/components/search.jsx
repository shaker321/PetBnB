const React = require("react");
const hashHistory = require("react-router").hashHistory;
const PetMap = require("./pet_map");
const PetIndex = require("./pet_index");

const Search = React.createClass({
  render() {
    return (
      <div className="search-page">
        <PetMap
          lat={parseFloat(this.props.location.query.lat)}
          lng={parseFloat(this.props.location.query.lng)}
          locationId={this.props.params.location_id}/>
        <PetIndex locationId={this.props.params.location_id}/>
      </div>
    );
  }
});

module.exports = Search;
