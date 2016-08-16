# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `SignInForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. stores in `_currentUser` in `CurrentUserStore`
* `removeCurrentUser`
  0. invoked from an API callback
  0. removes `_currentUser` in `CurrentUserStore`

## Pet Cycles

### Pets API Request Actions

* `fetchAllPets`
  0. invoked from `PetsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/location/:location_id/pets` is called.
  0. `receiveAllPets` is set as the success callback.

* `fetchSinglePet`
  0. invoked from `PetDetail` `didMount`/`willReceiveProps`
  0. `GET /api/location/:location_id/pets/:pet_id` is called.
  0. `receiveSinglePet` is set as the success callback.


### Pets API Response Actions

* `receiveAllPets`
  0. invoked from an API callback.
  0. `Pet` store updates `_pets` and emits change.

* `receiveSinglePet`
  0. invoked from an API callback.
  0. `Pet` store updates `_pets[id]` and emits change.

* `removePet`
  0. invoked from an API callback.
  0. `Pet` store removes `_pets[id]` and emits change.

### Store Listeners

* `PetsIndex` component listens to `Pet` store.
* `PetDetail` component listens to `Pet` store.


## Review Cycles

### Review API Request Actions

* `fetchAllReviews`
  0. invoked from `ReviewsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/pets/location/:id/pets/:pet_id/reviews` is called.
  0. `receiveAllReviews` is set as the success callback.

### Reviews API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews` and emits change.

### Store Listeners

* `ReviewsIndex` component listens to `Review` store.


## Location Cycles

### Location API Request Actions

* `fetchAllLocations`
  0. invoked from `LocationsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/locations/pets` is called.
  0. `receiveAllLocations` is set as the success callback.

* `fetchSingleLocation`
  0. invoked from `LocationDetail` `didMount`/`willReceiveProps`
  0. `GET /api/locations/:id` is called.
  0. `receiveSingleLocation` is set as the success callback.

### Locations API Response Actions

* `receiveAllLocations`
  0. invoked from an API callback.
  0. `Location` store updates `_locations` and emits change.

* `receiveSingleLocation`
  0. invoked from an API callback.
  0. `Location` store updates `_location[id]` and emits change.

### Store Listeners

* `LocationsIndex` component listens to `Location` store.
* `LocationDetail` component listens to `Location` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `LocationSearchBar` `onChange` when there is text
  0. `GET /api/locations` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `PetSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
