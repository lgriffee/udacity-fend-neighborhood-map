import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import PropTypes from 'prop-types'

// Based off documentation example https://tomchentw.github.io/react-google-maps/
const LanderMap = (props) => {

  LanderMap.propTypes = {
      markers: PropTypes.array.isRequired,
      onMarkerClick: PropTypes.func.isRequired
  }

  const { markers, onMarkerClick } = props

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 42.833131, lng: -108.731196 }}>
          {markers.map((marker, index) =>
            <Marker
              key={index}
              onClick={() => onMarkerClick(marker)}
              title={marker.title}
              name={marker.name}
              position={marker.position}
              icon={marker.icon}
              // animation={google.maps.Animation.DROP}
            >
              {marker.isOpen && <InfoWindow>
                <div>
                  <p>{marker.name}</p>
                </div>
              </InfoWindow>}
            </Marker>
         )} */}
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
