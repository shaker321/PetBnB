const React = require("react");
const FilterActions = require("../actions/filter_actions");

const FilterForm = React.createClass({
  maxPriceChanged(e) {
    FilterActions.updateMaxPrice(parseInt(e.target.value));
  },

  minPriceChanged(e) {
    FilterActions.updateMinPrice(parseInt(e.target.value));
  },

  currentMax() {
    return this.props.maxPrice;
  },

  currentMin() {
    return this.props.minPrice;
  },

  desiredSpecies(e) {
    FilterActions.updateDesiredSpecies(e.target.value);
  },

  currentDesiredSpecies() {
    return this.props.desiredSpecies;
  },

  render() {
    return(
      <div className="filter-form-container">
        <label className="filter-form-min-label">Min Price: </label>
        <input
          type="number"
          onChange={this.minPriceChanged}
          value={this.currentMin()}
          min="0"
          className="filter-form-min"/>

        <label className="filter-form-max-label">Max Price: </label>
        <input
          type="number"
          onChange={this.maxPriceChanged}
          value={this.currentMax()}
          min="0"
          className="filter-form-max"/>

        <select onChange={this.desiredSpecies} className="filter-form-species">
          <option value="" disabled="disabled" selected="selected">Select a Species</option>
          <option value="dog">🐶 (dog)</option>
          <option value="cat">🐱 (cat)</option>
          <option value={"undefined"}>🐶 🐱 (both)</option>
        </select>
      </div>
    );
  }
});

module.exports = FilterForm;
