const React = require("react");
const ReactDOM = require("react-dom");
const hashHistory = require("react-router").hashHistory;
const LocationStore = require("../stores/location_store");
const PetStore = require("../stores/pet_store");
const PetActions = require("../actions/pet_actions");
// let infowindow; // For closing open infowindows when a new one is opened

const PetMap = React.createClass({
  setCenterCoords() {
    let location = LocationStore.find(parseInt(this.props.locationId));
    this.map.setCenter({lat: location.center_lat, lng: location.center_lng});
  },

  componentDidMount() {
    this.markers = [];
    this.markerActive = undefined;

    this.petStoreListener = PetStore.addListener(this.createMarkers);
    this.locationStoreListener = LocationStore.addListener(this.setCenterCoords);

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    this.map = new google.maps.Map(mapDOMNode, {center: {lat: 40.7529, lng: -73.9942}, zoom: 13});

    this.mapsListener = google.maps.event.addListener(this.map, "idle", this._getMapCoords);
  },

  componentWillUnmount() {
    this.petStoreListener.remove();
    this.locationStoreListener.remove();
    google.maps.event.removeListener(this.mapsListener);
  },

  _getMapCoords() {
    let latLngBounds = this.map.getBounds();
    let northEastBound = latLngBounds.getNorthEast();
    let southWestBound = latLngBounds.getSouthWest();

    LocationStore.setBounds({
      bounds: {
        "northEast": {lat: `${northEastBound.lat()}`, lng: `${northEastBound.lng()}`},
        "southWest": {lat: `${southWestBound.lat()}`, lng: `${southWestBound.lng()}`}
      }
    });


    PetActions.fetchAllPets(LocationStore.getBounds());
  },

  createMarkers() {
    let pets = PetStore.all();
    let that = this;
    let remainingMarkers = [];

    this.markers.forEach(
      (marker, index) =>
        {
          if (pets[marker.id]) {
            pets[marker.id] = null;
            remainingMarkers.push(marker);
          } else {
            marker.setMap(null);
          }
        }
    );

    this.markers = remainingMarkers;

    Object.keys(pets).forEach(
      (key) =>
        {
          if (pets[key] !== null) {
                let marker = new google.maps.Marker({
                  position: {lat: pets[key].lat, lng: pets[key].lng},
                  map: that.map,
                  title: pets[key].name,
                  id: pets[key].id
                });

              that.markers.push(marker);

              marker.addListener("click", function() {
                if (that.markerActive) {
                  that.infowindow.close();
                  that.markerActive = false;
                }

                that.infowindow = new google.maps.InfoWindow({
                  content:
                    `<a href='#/api/pets/${pets[marker.id].id}'>
                      <h3 class="info-window-text">${pets[marker.id].name}</h3>
                      <img height="100px" width="100px" src="${pets[marker.id].image_url}">
                      <h3 class="info-window-text">$${pets[marker.id].price} Per Day</h3>
                    </a>`
                });

                that.markerActive = true;

                that.infowindow.open(that.map, marker);
              });

              that.map.addListener("click", function() {
                that.infowindow.close();
                that.markerActive = false;
              });
            }
        }
    );
  },

  render() {
    if (this.props.lat) {
      this.map.setCenter({lat: this.props.lat, lng: this.props.lng});
    }
    return (<div className="map" ref="map"></div>);
  }
});

module.exports = PetMap;
