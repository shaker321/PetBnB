const React = require("react");
const PetActions = require("../actions/pet_actions");
const hashHistory = require("react-router").hashHistory;
const SessionStore = require("../stores/session_store");
const SearchLocationsBar = require("./search_locations_bar");

const PetForm = React.createClass({
  getInitialState() {
    return ({
      name: "",
      species: "",
      age: undefined,
      breed: "",
      temperament: "",
      price: undefined,
      lat: undefined,
      lng: undefined,
      user_id: SessionStore.currentUser.id,
      imageFile: null,
      imageUrl: null
    });
  },

  componentDidMount() {
    let input = document.getElementById("pet-form-location-input");
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(this.autocomplete, "place_changed", this._updateAddress);
  },

  componentWillUnmount() {
    this.autocompleteListener.remove();
  },

  _updateAddress() {
    this.address = this.autocomplete.getPlace();
  },

  handleSubmit(e) {
    e.preventDefault();

    const coords = {
      lat: this.address.geometry.location.lat(),
      lng: this.address.geometry.location.lng()
    };

    let formData = new FormData();
    formData.append("pet[name]", this.state.name);
    formData.append("pet[species]", this.state.species);
    formData.append("pet[age]", this.state.age);
    formData.append("pet[breed]", this.state.breed);
    formData.append("pet[temperament]", this.state.temperament);
    formData.append("pet[price]", this.state.price);
    formData.append("pet[lat]", coords.lat);
    formData.append("pet[lng]", coords.lng);
    formData.append("pet[user_id]", this.state.user_id);

    if (this.state.imageFile) {
      formData.append("pet[image]", this.state.imageFile);
    }

    PetActions.createPet(formData);
    hashHistory.push("/");
  },

  handleCancel(e) {
    e.preventDefault();
    hashHistory.push("/");
  },

  updateFile(e) {
    e.preventDefault();

    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
    (function() {
      $("form").change(function() {
        let empty = false;

        $("form > input").each(function() {
          if ($(this).val() === "") {
            empty = true;
          }
        });

        if ($("form > select").val() === null) {
          empty = true;
        }

        if (empty) {
          $("#post").attr("disabled", "disabled");
        } else {
          $("#post").removeAttr("disabled");
        }
      });
    })();

    return (
      <div className="pet-form-container">
        <h3 className="pet-form-title">Post Your Pet!</h3>
        <form onSubmit={this.handleSubmit} className="pet-form">
          <input
            type="text"
            value={this.state.name}
            onChange={this.update("name")}
            className="pet-form-name-input"
            placeholder="Name"/>

          <br/>

          <select onChange={this.update("species")} className="pet-form-species-container">
            <option value="" disabled="disabled" selected="selected">Select a Species</option>
            <option value="dog">dog</option>
            <option value="cat">cat</option>
          </select>

          <br/>

          <input
            type="number"
            min="0"
            step="1"
            value={this.state.age}
            onChange={this.update("age")}
            className="pet-form-age-input"
            placeholder="Age"/>

          <br/>

          <input
            type="text"
            value={this.state.breed}
            onChange={this.update("breed")}
            className="pet-form-breed-input"
            placeholder="Breed"/>

          <br/>

          <input
            type="text"
            value={this.state.temperament}
            onChange={this.update("temperament")}
            className="pet-form-temperament-input"
            placeholder="Temperament"/>

          <br/>

          <input
            type="number"
            min="0"
            step="1"
            value={this.state.price}
            onChange={this.update("price")}
            className="pet-form-price-input"
            placeholder="Price Per Day"/>

          <br/>

          <input
            type="text"
            className="pet-form-location-input"
            id="pet-form-location-input"
            placeholder={this.state.location}/>

          <br/>

          <div className="pet-form-img-container">
            <input type="file" onChange={this.updateFile} className="pet-form-img"/>
            <img src={this.state.imageUrl} className="pet-form-img-show"/>
          </div>

          <br/>

          <input
            type="submit"
            value="Post"
            className="pet-form-submit"
            id="post"
            disabled="disabled"/>
        </form>


        <button className="pet-form-cancel" onClick={this.handleCancel}>Cancel</button>
      </div>
    );

  }
});

module.exports = PetForm;
