import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// Based off documentation examples https://www.npmjs.com/package/google-maps-react
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const {google} = this.props;

    const style = {
      width: '70%',
      height: '91%'
    }
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 42.833131,
          lng: -108.731196}}
        zoom={15}
        onClick={this.onMapClicked}>

        <Marker
          onClick={this.onMarkerClick}
          title={'Thai Chef'}
          name={'Thai Chef'}
          position={{lat: 42.826491, lng: -108.717664}}
          // icon={{
          //   url: "../icons/restaurant.svg",
          //   anchor: new google.maps.Point(32,32),
          //   scaledSize: new google.maps.Size(64,64)}}
          />

        <Marker
          onClick={this.onMarkerClick}
          title={'Cowfish'}
          name={'Cowfish'}
          position={{lat: 42.832968, lng: -108.727977}}/>

        <Marker
          onClick={this.onMarkerClick}
          title={'Gannet Grill'}
          name={'Gannet Grill'}
          position={{lat: 42.832747, lng: -108.727677}}/>

        <Marker
          onClick={this.onMarkerClick}
          title={'NOLS'}
          name={'NOLS'}
          position={{lat: 42.834521, lng: -108.730227}}/>

        <Marker
          onClick={this.onMarkerClick}
          title={'Maverick Restaurant & Lounge'}
          name={'Maverick Restaurant & Lounge'}
          position={{lat: 42.835623, lng: -108.741328}}/>


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
