// React
const React = require("react");
const ReactDOM = require("react-dom");
// Auth
const SessionStore = require("./stores/session_store");
const SessionActions = require("./actions/session_actions");
//Components
const App = require("./components/app");
const MainPage = require("./components/main_page");
const LoginForm = require("./components/login_form");
const LocationIndexItem = require("./components/location_index_item");
const Search = require("./components/search");
const PetIndex = require("./components/pet_index");
const PetForm = require("./components/pet_form");
const PetProfile = require("./components/pet_profile");
// Router
const ReactRouter = require("react-router");
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
// Modal
const Modal = require("react-modal");


const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage}/>
      <Route path="/locations/:location_id" component={Search}/>
      <Route path="/api/pets" component={Search}/>
      <Route path="/api/pets/post" component={PetForm} onEnter={_ensureLoggedIn}/>
      <Route path="/api/pets/:pet_id" component={PetProfile}/>
    </Route>
  </Router>
); //NB: Be sure to use ensure logged in on certain routes when you get to them

function _ensureLoggedIn(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace("/");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  const root = document.getElementById("content");
  Modal.setAppElement(document.body);
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(appRouter, root);
});
