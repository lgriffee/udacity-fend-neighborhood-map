import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import PropTypes from 'prop-types'

// Based off documentation examples https://www.npmjs.com/package/google-maps-react
export class MapContainer extends Component {

  static propTypes = {
      markers: PropTypes.array.isRequired,
      showingInfoWindow: PropTypes.bool.isRequired,
      activeMarker: PropTypes.object.isRequired,
      selectedPlace: PropTypes.object.isRequired,
      onMarkerClick: PropTypes.func.isRequired,
      onMapClicked: PropTypes.func.isRequired,
      mysteriousFunction: PropTypes.func.isRequired
  }


  render() {
    const {google, markers, onMarkerClick, onMapClicked,
           showingInfoWindow, activeMarker, selectedPlace, mysteriousFunction} = this.props;


    return (
      <Map
        className= "map"
        google={google}
        initialCenter={{
          lat: 42.833131,
          lng: -108.731196}}
        zoom={14}
        onClick={onMapClicked}>

        {
          markers.map( (marker) => {return marker})
        }

        {/* {markers.map((marker) =>
          <Marker
            key={marker.title}
            onClick={onMarkerClick}
            title={marker.title}
            name={marker.name}
            position={marker.position}
            icon={marker.icon}
            animation={google.maps.Animation.DROP}
            ref={React.createRef()}
          />
       )} */}


        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}>
            <div>
              <h1>{selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB7MZu2VRmZQicd8qcsxGg5jBSegiT0ec0')
})(MapContainer)
