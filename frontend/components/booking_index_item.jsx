const React = require("react");

const ReviewIndexItem = React.createClass({
  render() {
    return (
        <ul className="booking-index-item">
          <li className="booking-index-item-start">{this.props.start}</li>
          <li className="booking-index-item-end">{this.props.end}</li>
        </ul>
    );
  }
});

module.exports = ReviewIndexItem;
