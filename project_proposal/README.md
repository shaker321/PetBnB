# PetBnB

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product
PetBnB is a web application inspired by AirBnB that will be build using Ruby on Rails and React.js. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Pets
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Pet Profile
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Pets search (by location & availability) & Google Maps on search
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Reviews
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] BONUS: Post a Pet
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] BONUS: User/Host Profile
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] BONUS: Messaging
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 T & W)

**Objective:** Functioning rails project with front-end Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication backend setup
- [ ] create `StaticPages` controller and root view
- [ ] set up webpack & flux scaffold with skeleton files
- [ ] setup `APIUtil` to interact with the API
- [ ] set up flux cycle for frontend auth
- [ ] user signup/signin components
- [ ] blank landing component after signin
- [ ] style signin/signup components
- [ ] seed users

### Phase 2: Pets & Locations Models, API, and components (3 days, W1 Th & F, W2 M)

**Objective:** Pets belong to Locations, and can be viewed by location.

- [ ] create `Pets` model
- [ ] create `Location` model
- [ ] seed the database with test data
- [ ] CRUD API for pets (`PetsController`)
- [ ] CRUD API for locations (`LocationController`)
- [ ] jBuilder views for pets
- [ ] jBuilder views for locations
- [ ] test out API interaction in the console.
- implement each pets component, building out the flux loop as needed.
  - [ ] `Location`
  - [ ] `PetsIndex`
  - [ ] `PetsIndexItem`  
- [ ] render map for each location component
- [ ] style Locations components
- [ ] style PetsIndex components
- [ ] style PetsIndexItem components
- [ ] seed locations
- [ ] seed pets index

### Phase 3: Reviews (1 day, W2 T)

**Objective:** Reviews belong to Pets and Users, and can be viewed by pet.

- [ ] create `Review` model
- build out API, Flux loop, and components for:
- [ ] Use CSS to style new components
- [ ] Seed Reviews

### Phase 4: Polish Day (1 day, W2 W)

**Objective:** Polish off and finish everything up until now.

### Phase 5: Bonus Feature 1 (1 day, W2 Th)

**objective:** Implement add a pet feature.

- [ ] create page for adding pets
- [ ] update pets CRUD to include create
- [ ] style add a pet page

### Phase 6: - Bonus Feature 2 (1 day, W2 F)

**objective:** Add user profiles

- [ ] create page for user profiles
- [ ] style user profiles

### Extra Bonus Features (TBD)
- [ ] Messaging
