const React = require("react");
const hashHistory = require("react-router").hashHistory;
const PetIndexItem = require("./pet_index_item");
const PetStore = require("../stores/pet_store");
const LocationStore = require("../stores/location_store");
const PetActions = require("../actions/pet_actions");
const FilterParamsStore = require("../stores/filter_params_store");
const FilterForm = require("./filter_form");


const PetIndex = React.createClass({
  getInitialState() {
    return ({filterParams: FilterParamsStore.params()});
  },

  _filtersChanged() {
    const newFilters = FilterParamsStore.params();
    this.setState({filterParams: newFilters});
    PetActions.fetchAllPets(LocationStore.getBounds(), newFilters);
  },

  componentDidMount() {
    this.petListener = PetStore.addListener(this.forceUpdate.bind(this));
    this.locationListener = LocationStore.addListener(this.forceUpdate.bind(this));
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);

    //put this in the store isEmpty method same way
    if (Object.keys(LocationStore.getBounds()).length === 0) {
      LocationStore.setBounds({ bounds: {"northEast": {lat: "42", lng: "72"},
          "southWest": {lat: "41", lng: "71"}}});
    }

    PetActions.fetchAllPets(LocationStore.getBounds(), this.state.filterParams);
  },

  componentWillUnmount() {
    this.petListener.remove();
    this.locationListener.remove();
    this.filterListener.remove();
  },

  render() {
    const pets = PetStore.all();
    const petKeys = Object.keys(pets);

    let petIndexItems = petKeys.map(
      (key) =>
        { return (
          <PetIndexItem
            pet={pets[key]}
            key={key}/> );
        }
    );
    
    return (
      <div className="pet-index-items-container">
        <FilterForm
          minPrice={this.state.filterParams.minPrice}
          maxPrice={this.state.filterParams.maxPrice}
          desiredSpecies={this.state.filterParams.desiredSpecies}/>
        {petIndexItems}
      </div>
    );
  }
});

module.exports = PetIndex;
