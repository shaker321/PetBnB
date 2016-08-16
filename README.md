# PetBnB

[PetBnB live][heroku]

[heroku]: https://pet-bnb.herokuapp.com/

PetBnB is a full-stack web application inspired by AirBnB.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.

The app is all about adorable dogs and cats (with my very own dog as the face of the app)! Users can rent pets from other users and/or rent out their own pets.

## Features & Implementation

### Single-Page App

PetBnB is a single-page app; all content is delivered on one static page. The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`. Sensitive information is kept safe via both backend and frontend user authentication.

### Account Creation

New users can sign up with an email address and password or use a provided guest account to poke around and get a feel for the app first. Obviously, ilovepuppies@puppies.com was chosen to be the email address that every guest gets the pleasure of using.

After logging in, users can post reviews, book pets, rent out their own pets, browse pets for rent across the globe, or stare blankly at a beautiful app.

### Adding Pets

Users can upload pictures of their pets along with relevant information. Once the form is completely filled in, the app enables a submit button so the world can adore users' pets as much as they do!

When uploaded, every pet's home address is converting into precise latitude and longitude coordinates so he/she can be accurately placed on a google maps integrated map. The coordinates are later converted back to a street address in each pet's profile.

### Browsing Pets

Search is an essential component of PetBnb. With an autocomplete search bar always ready for a new address and a map itching to be moved, users can browse for pets until finally remember to feed their own pets.

The map is fully functional; markers disappear and reappear as the map moves, each marker has an info-box that includes a pet's picture, name, and price per day (plus each info-box is a link that can take you directly to a pet's profile), the map (and index items) can be sorted by price and species, the search bar moves the map accurately and accordingly, and much more!

### Posting Reviews
Each Pet has a profile page that enables you to both post reviews and book the pet for a stay. Reviews are ordered by recency. Each rating (🐱 (1) - 🐱 🐶 🐱 🐶 🐱 (5) Tail Wags!) is averaged to give each pet an easily accessible score, but let's be honest all pets deserve a solid 🐱 🐶 🐱 🐶 🐱 Tail Wags!.

### Booking Pets
Bookings aren't done at random here at PetBnB. Our database houses all of the bookings for each pet and alerts users if a pet is already booked for a requested day. For ease, the most recent bookings are shown on the side of each profile.
