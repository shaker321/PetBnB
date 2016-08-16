const React = require("react");
const PetStore = require("../stores/pet_store");
const hashHistory = require("react-router").hashHistory;
const Search = require("./search");
const PetActions = require("../actions/pet_actions");

const PetIndexItem = React.createClass({
  componentDidMount() {
    this.petListener = PetStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.petListener.remove();
  },

  handleClick(e) {
    e.preventDefault();
    PetActions.fetchSinglePet(this.props.pet.id);
    hashHistory.push("/api/pets/" + this.props.pet.id);
  },

  render() {
    return (
      <div>
        <button
          className="pet-index-item"
          onClick={this.handleClick}>
          <img src={this.props.pet.image_url} className="pet-index-item-img"/>
          <div className="pet-index-item-text">{this.props.pet.name}</div>
          <div className="pet-index-item-price">${this.props.pet.price}</div>
        </button>
      </div>
    );
  }

});

module.exports = PetIndexItem;
