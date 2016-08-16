const React = require("react");
const SessionStore = require("../stores/session_store");
const PetActions = require("../actions/pet_actions");
const ErrorActions = require("../actions/error_actions");
const ErrorStore = require("../stores/error_store");

const BookingForm = React.createClass({
  getInitialState() {
    this.bookingErrors = null;
    return ({start_date: undefined, end_date: undefined, status: "PENDING"});
  },

  componentDidMount() {
    ErrorActions.clearErrors();
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  _updateStart(e) {
    e.preventDefault();
    this.setState({start_date: e.target.value});
  },

  _updateEnd(e) {
    e.preventDefault();
    this.setState({end_date: e.target.value});
  },

  errors() {
    this.bookingErrors = ErrorStore.errors("booking");
    const messages = this.bookingErrors.map(
      (errorMessage, i) => {
        return (<li key={i}>{errorMessage}</li>);
      }
    );

    return (<ul>{messages}</ul>);
  },


  handleSubmit(e) {
    e.preventDefault();
    ErrorActions.clearErrors();
    this.setState({status: "PENDING"});

    const booking = ({
      booking: {
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        status: this.state.status,
        pet_id: this.props.petId,
        user_id: SessionStore.currentUser().id
      }
    });

    PetActions.createBooking(booking, this._updateStatus);
  },

  _updateStatus() {
    this.setState({status: "APPROVED"});
  },

  render() {
    let inputVal = "Login to Book";
    let disabled = true;

    if (SessionStore.isUserLoggedIn()) {
      inputVal = "Request to Book";
      disabled = false;
    }

    let status = "";

    if (this.state.status === "APPROVED") {
      status = "Booking Approved! Enjoy your pet!";
    }

    return (
      <div className="booking-form">
        <form onSubmit={this.handleSubmit}>
          <div className="booking-price-label-container">
            <label className="booking-price-label-dollars">${this.props.price}</label>
            <label className="booking-price-label-per-day">Per Day</label>
          </div>

          <div className="booking-form-white">

            <div className="booking-form-errors">
              {status}
              {this.errors()}
            </div>

            <label className="booking-form-start">Start Date</label>
            <label className="booking-form-end">End Date</label>

            <input className="booking-form-date-start" onChange={this._updateStart} type="date"/>
            <input className="booking-form-date-end" onChange={this._updateEnd} type="date"/>

            <br/>

            <input
              className="booking-form-submit"
              id="book"
              disabled={disabled}
              type="submit"
              value={inputVal}/>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = BookingForm;
