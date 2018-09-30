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

    // let getAnimation = (marker) => {
    //   console.log(marker);
    //   if (this.state.activeMarker.name ){
    //     return google.maps.Animation.BOUNCE;
    //   }else{
    //     return google.maps.Animation.DROP;
    //   }
    // }


    const mapStyle = {
      width: '70%',
      height: '91%'
    }

    return (
      <Map
        google={this.props.google}
        style={mapStyle}
        initialCenter={{
          lat: 42.833131,
          lng: -108.731196}}
        zoom={14}
        onClick={this.onMapClicked}>

        {markers.map((marker) =>
          <Marker
            onClick={this.onMarkerClick}
            title={marker.title}
            name={marker.name}
            position={marker.position}
            icon={marker.icon}
            animation={marker.animation}
          />
       )}

        {/* <Marker
          onClick={this.onMarkerClick}
          title={'Thai Chef'}
          name={'Thai Chef'}
          position={{lat: 42.825559, lng: -108.717673}}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/restaurant.png",
            anchor: new google.maps.Point(15,15),
            scaledSize: new google.maps.Size(30,30)}}
          // animation={google.maps.Animation.DROP}
          />

        <Marker
          onClick={this.onMarkerClick}
          title={'Cowfish'}
          name={'Cowfish'}
          position={{lat: 42.832968, lng: -108.727977}}
        // animation={google.maps.Animation.DROP}
      />

        <Marker
          onClick={this.onMarkerClick}
          title={'Gannet Grill'}
          name={'Gannet Grill'}
          position={{lat: 42.832747, lng: -108.727677}}
        // animation={google.maps.Animation.DROP}
      />

        <Marker
          onClick={this.onMarkerClick}
          title={'NOLS'}
          name={'NOLS'}
          position={{lat: 42.834521, lng: -108.730227}}
        // animation={google.maps.Animation.DROP}
      />

        <Marker
          onClick={this.onMarkerClick}
          title={'Maverick Restaurant & Lounge'}
          name={'Maverick Restaurant & Lounge'}
          position={{lat: 42.835623, lng: -108.741328}}
          // animation={google.maps.Animation.DROP}
        /> */}


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
