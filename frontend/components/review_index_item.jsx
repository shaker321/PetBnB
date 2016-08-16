const React = require("react");

const ReviewIndexItem = React.createClass({
  render() {
    let ratings = [
      <li className="review-index-item-rating">🐱  Tail Wag!</li>,
      <li className="review-index-item-rating">🐱 🐶  Tail Wags!</li>,
      <li className="review-index-item-rating">🐱 🐶 🐱  Tail Wags!</li>,
      <li className="review-index-item-rating">🐱 🐶 🐱 🐶  Tail Wags!</li>,
      <li className="review-index-item-rating">🐱 🐶 🐱 🐶 🐱  Tail Wags!</li>
    ];


    return (
        <ul className="review-index-item">
          {ratings[this.props.rating - 1]}
          <li className="review-index-item-body">{this.props.body}</li>
        </ul>
    );
  }
});

module.exports = ReviewIndexItem;
