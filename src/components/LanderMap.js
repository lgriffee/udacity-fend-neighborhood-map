import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import PropTypes from 'prop-types'
import { compose, withProps } from "recompose"

// Based off react-google-maps docs (https://tomchentw.github.io/react-google-maps/)
const MyMapComponent =
  compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyB7MZu2VRmZQicd8qcsxGg5jBSegiT0ec0",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div className="map" role="application" />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 42.833131, lng: -108.731196 }}>
        {props.markers.map((marker, index) =>
          <Marker
            key={index}
            onClick={() => props.onMarkerClick(marker)}
            title={marker.title}
            name={marker.name}
            position={marker.position}
            animation={marker.animation}/>
        )}

       {props.showingInfoWindow && props.activeMarker &&
         <InfoWindow
           position={props.activeMarker.position}
           options={{pixelOffset: new window.google.maps.Size(0,-50)}}>
           <div className="info-window">
             <p className="info-window-title">{props.activeMarker.name}</p>
             <p className="info-window-subtitle">{props.activeMarker.type}</p>
           </div>
         </InfoWindow>
       }
    </GoogleMap>
  )


const LanderMap = (props) => {

  LanderMap.propTypes = {
      markers: PropTypes.array.isRequired,
      onMarkerClick: PropTypes.func.isRequired,
      showingInfoWindow: PropTypes.bool.isRequired,
      activeMarker: PropTypes.object.isRequired
  }

  const { markers, onMarkerClick, showingInfoWindow, activeMarker } = props

  return (
    <MyMapComponent
      markers={markers}
      onMarkerClick={onMarkerClick}
      showingInfoWindow={showingInfoWindow}
      activeMarker={activeMarker}/>
  )
}

export default LanderMap
