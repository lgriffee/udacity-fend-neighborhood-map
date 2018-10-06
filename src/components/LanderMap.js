import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

// Based off documentation example
const LanderMap = () => {

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {props.isMarkerShown &&
          <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
  ))

  return (
    <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyB7MZu2VRmZQicd8qcsxGg5jBSegiT0ec0"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div className="map" />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}

export default LanderMap
