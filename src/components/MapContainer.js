import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PropTypes from 'prop-types'

// Based off documentation examples https://www.npmjs.com/package/google-maps-react
export class MapContainer extends Component {

  static propTypes = {
      markers: PropTypes.array.isRequired
  }

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const {google, markers} = this.props;


    return (
      <Map
        className= "map"
        google={this.props.google}
        initialCenter={{
          lat: 42.833131,
          lng: -108.731196}}
        zoom={14}
        onClick={this.onMapClicked}>

        {markers.map((marker) =>
          <Marker
            key={marker.title}
            onClick={this.onMarkerClick}
            title={marker.title}
            name={marker.name}
            position={marker.position}
            icon={marker.icon}
            animation={google.maps.Animation.DROP}
          />
       )}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB7MZu2VRmZQicd8qcsxGg5jBSegiT0ec0')
})(MapContainer)
