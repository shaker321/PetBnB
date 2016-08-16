## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Navbar
    * Logo - Link to Main Page
    * Sign Up - Link to Sign Up Page
    * Log In - Link to Login Page
    * BONUS: Post a Pet - Link to Post Pet Page
  * Main Page
    * Search
    * Cities - Link to specific city
  * **LoginForm**
  * **SignupForm**
  * **Location**
    * **PetsIndex**
      * **PetIndexItem**
        * PetProfile
        * **Reviews**
          * Review Form


## Routes

* **component:** `App` **path:** `/`
  * **component** `LoginForm` **path:** /login
  * **component** `SignupForm` **path:** /signup
  * **component:** `Location` **path:** /locations
    * **component:** `PetsIndex` **path:** /locations/:locationId/pets
      * **component:** `PetsIndexItem` **path:** /locations/:locationId/pets/:petId

For Routes that have no `PetId`, `PetsIndex` will render all
pets in the area.
