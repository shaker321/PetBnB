const React = require("react");
const hashHistory = require("react-router").hashHistory;
const PetActions = require("../actions/pet_actions");
const SessionStore = require("../stores/session_store");

const ReviewForm = React.createClass({
  getInitialState() {
    return ({rating: 5, body: ""});
  },

  handleSubmit(e) {
    e.preventDefault();
    const review = ({
      review: {
        rating: this.state.rating,
        body: this.state.body,
        pet_id: this.props.petId,
        user_id: SessionStore.currentUser().id
      }
    });

    PetActions.createReview(review, this.clearText);
  },

  clearText() {
    this.setState({body: ""});
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
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

    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label className="review-form-label">Post a Review</label>

          <br/>

          <select onChange={this.update("rating")} className="review-form-rating">
            <option value="" disabled="disabled" selected="selected">Select a Rating</option>
            <option value="5">🐱 🐶 🐱 🐶 🐱</option>
            <option value="4">🐶 🐱 🐶 🐱</option>
            <option value="3">🐱 🐶 🐱</option>
            <option value="2">🐶 🐱</option>
            <option value="1">🐱</option>
          </select>

          <br/>

          <textarea
            cols="70"
            rows="10"
            value={this.state.body}
            placeholder="Tell us about your experience! (You must be logged in to post a review.)"
            className="review-form-body"
            onChange={this.update("body")}>
          </textarea>

          <br/>

          <input
            className="review-form-submit"
            type="submit"
            id="post"
            disabled="disabled"/>
        </form>
      </div>
    );
  }
});

module.exports = ReviewForm;
