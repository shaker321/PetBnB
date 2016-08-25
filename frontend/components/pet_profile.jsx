const React = require("react");
const hashHistory = require("react-router").hashHistory;
const PetActions = require("../actions/pet_actions");
const PetStore = require("../stores/pet_store");
const LocationStore = require("../stores/location_store");
const ReviewForm = require("./review_form");
const ReviewIndexItem = require("./review_index_item");
const BookingForm = require("./booking_form");
const BookingIndexItem = require("./booking_index_item");

const PetProfile = React.createClass({
  getInitialState() {
    this.pet = PetStore.find(parseInt(this.props.params.pet_id));
    return ({pet: this.pet, address: null});
  },

  componentDidMount() {
    this.petListener = PetStore.addListener(this._onChange);
    PetActions.fetchSinglePet(this.props.params.pet_id);
  },

  _onChange() {
    this.setState({pet: PetStore.find(parseInt(this.props.params.pet_id))});
    this._getAddress(this.state.pet.lat, this.state.pet.lng);
  },

  componentWillUnmount() {
    this.petListener.remove();
  },

  _getAddress(lat, lng) {
    let geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(lat, lng);
    let that = this;

    geocoder.geocode({"latLng": latlng}, function(results, status) {
      that.setState({address: results[0].formatted_address});
    });
  },

  render() {
    // Reviews
    const reviews = this.state.pet.reviews;
    const reviewIndexItems = [];
    let numRatings = 0;
    let sumRatings = 0;

    if (reviews) {
      reviews.forEach (
        (review) =>
          {
            reviewIndexItems.push(
              <ReviewIndexItem
                rating={review.rating}
                body={review.body}
                username={review.username}/>
            );

            numRatings++;
            sumRatings += review.rating;
          }
      );

      // reviewIndexItems.reverse();
    }

    let avgRating = Math.round(sumRatings / numRatings);

    let ratings = [
      <div className="pet-review-rating">🐱  Tail Wag!</div>,
      <div className="pet-review-rating">🐱 🐶  Tail Wags!</div>,
      <div className="pet-review-rating">🐱 🐶 🐱  Tail Wags!</div>,
      <div className="pet-review-rating">🐱 🐶 🐱 🐶  Tail Wags!</div>,
      <div className="pet-review-rating">🐱 🐶 🐱 🐶 🐱  Tail Wags!</div>
    ];

    if (!avgRating) {
      avgRating = "";
    } else {
      avgRating = ratings[avgRating - 1];
    }

    // Bookings
    const bookings = this.state.pet.bookings;
    let bookingIndexItems = [];

    if (bookings) {
      bookings.forEach (
        (booking) =>
          {
            bookingIndexItems.push(
              <BookingIndexItem
                start={booking.start_date}
                end={booking.end_date}
                id={booking.id}/>
            );
          }
      );
      bookingIndexItems.reverse();
      bookingIndexItems = bookingIndexItems.slice(0, 5);
    }

    return(
      <div className="pet-profile">
        <img src={this.state.pet.image_url} className="pet-profile-img"/>

        <BookingForm price={this.state.pet.price} petId={this.state.pet.id}/>

        <div className="pet-profile-booking-container">
          <div className="pet-profile-booking-title">Recent Bookings</div>
          <div className="pet-profile-booking-white">
            <label className="pet-profile-booking-start">Start Date</label>
            <label className="pet-profile-booking-end">End Date</label>
            <div className="pet-profile-booking-index">{bookingIndexItems}</div>
          </div>
        </div>

        <div className="pet-profile-item-container">
          <h1 className="pet-profile-name">Meet {this.state.pet.name}!</h1>
          <div className="pet-review-rating">{avgRating}</div>
          <div className="pet-profile-border"></div>

          <h4 className="pet-profile-prop">Species</h4>
          <h3 className="pet-profile-prop-resp">{this.state.pet.species}</h3>
          <div className="pet-profile-border"></div>

          <h4 className="pet-profile-prop">Breed</h4>
          <h3 className="pet-profile-prop-resp">{this.state.pet.breed}</h3>
          <div className="pet-profile-border"></div>

          <h4 className="pet-profile-prop">Age</h4>
          <h3 className="pet-profile-prop-resp">{this.state.pet.age} years old</h3>
          <div className="pet-profile-border"></div>

          <h4 className="pet-profile-prop">Temperament</h4>
          <h3 className="pet-profile-prop-resp">{this.state.pet.temperament}</h3>
          <div className="pet-profile-border"></div>

          <h4 className="pet-profile-prop">Location</h4>
          <h3 className="pet-profile-prop-resp">{this.state.address}</h3>
          <div className="pet-profile-border"></div>

          <h4 className="pet-profile-prop">Price</h4>
          <h3 className="pet-profile-prop-resp">${this.state.pet.price} Per Day</h3>
          <div className="pet-profile-border"></div>

          <br/>

          <div className="pet-review-header">Reviews</div>
          <ReviewForm petId={this.state.pet.id}/>
          {reviewIndexItems}
        </div>
      </div>
    );

  }
});

module.exports = PetProfile;
