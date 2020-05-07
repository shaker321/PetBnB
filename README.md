# PetBnB

PetBnB is a full-stack web application inspired by AirBnB.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.

The app is all about adorable dogs and cats (with my very own dog as the face of the app)! Users can rent pets from other users and/or rent out their own pets.

## Features & Implementation

### Single-Page App

![Landing Page](docs/LandingPage.png)

PetBnB is a single-page app; all content is delivered on one static page. The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`. Sensitive information is kept safe via both backend and frontend user authentication.

### Account Login and Creation

![Login](docs/Login.png)

Existing users can login and maximize their fun while new users can sign up with an email address and password or use a provided guest account to poke around and get a feel for the app first. Obviously, ilovepuppies@puppies.com was chosen to be the email address that every guest gets the pleasure of using.

After logging in, users can post reviews, book pets, rent out their own pets, browse pets for rent across the globe, or stare blankly at a beautiful app.

### Adding Pets

![Upload Pet](docs/UploadPet.png)

Users can upload pictures of their pets along with relevant information. Once the form is completely filled in, the app enables a submit button so the world can adore users' pets as much as they do!

When uploaded, every pet's home address is converting into precise latitude and longitude coordinates so he/she can be accurately placed on a google maps integrated map.

```javascript
const coords = {
  lat: this.address.geometry.location.lat(),
  lng: this.address.geometry.location.lng()
};
```

The coordinates are later converted back to a street address in each pet's profile.

```javascript
_getAddress(lat, lng) {
  let geocoder = new google.maps.Geocoder();
  let latlng = new google.maps.LatLng(lat, lng);
  let that = this;

  geocoder.geocode({"latLng": latlng}, function(results, status) {
    that.setState({address: results[0].formatted_address});
  });
}
```

### Browsing Pets

![Pet Index](docs/PetIndex.png)

Search is an essential component of PetBnb. With an autocomplete search bar always ready for a new address and a map itching to be moved, users can browse for pets until they finally remember to feed their own pets.

The map is fully functional; markers disappear and reappear as the map moves, each marker has an info-box that includes a pet's picture, name, and price per day (plus each info-box is a link that can take you directly to a pet's profile), the map (and index items) can be sorted by price and species, the search bar moves the map accurately and accordingly, and much more!

PetBnb utilizes custom SQL queries to fetch only the pets that reside in the current map area and meet the filter criteria rather than every single pet in our database. This results in significant server optimization. 

### Posting Reviews

![Reviews](docs/Reviews.png)

Each Pet has a profile page that enables you to both post reviews and book the pet for a stay. Reviews are ordered by recency. The post a review button is disabled unless all required fields are filled in.

```javascript
if (SessionStore.isUserLoggedIn()) {
  (function() {
    $("form").on("keyup mousemove", function() {
      let empty = false;

      if ($("form > select").val() === null) {
        empty = true;
      }

      if ($("form > textarea").val() === "") {
        empty = true;
      }

      if (empty) {
        $("#post").attr("disabled", "disabled");
      } else {
        $("#post").removeAttr("disabled");
      }
    });
  })();
}
```

Each rating (🐱 (1) - 🐱 🐶 🐱 🐶 🐱 (5) Tail Wags!) is averaged to give each pet an easily accessible score, but let's be honest all pets deserve a solid 🐱 🐶 🐱 🐶 🐱 Tail Wags!.

### Booking Pets

![Bookings](docs/Bookings.png)

Bookings aren't done at random here at PetBnB. Our database houses all of the bookings for each pet and alerts users if a pet is already booked for a requested day. For ease, the most recent bookings are shown on the side of each profile.
