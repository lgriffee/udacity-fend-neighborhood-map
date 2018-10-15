import React, { Component } from 'react'
import './App.css'

import LanderMap from '../components/LanderMap'
import TopBar from '../components/TopBar'
import ListView from '../components/ListView'


// Based off react-foursquare docs (https://github.com/foursquare/react-foursquare)
var foursquare = require('react-foursquare')({
  clientID: 'OYDMO4WB5OB4OATXDN0SFY4IC3YEUKDQVZE30YZCBODWV3L4',
  clientSecret: 'SWTMNWEXR2WEL3WBEU54THYRZX00LVEFEADUU5XTG2BD2BL2'
});

var params = {
  "near": "Lander, WY",
  "categoryId": "4d4b7105d754a06374d81259",
  "radius":	1500
};


class App extends Component {

  state = {
    markers: [],
    markerIcons: [],
    showingInfoWindow: false,
    activeMarker: {}
  }


  componentDidMount(){
    foursquare.venues.getVenues(params).then( results => {
      const markers = results.response.venues.map(venue => {
        return {
          title: venue.name,
          name: venue.name,
          position: {lat: venue.location.lat, lng: venue.location.lng},
          type: venue.categories[0] ? venue.categories[0].shortName : "none",
          animation: null
        }
      })
      this.setState({ markers: markers })
    });
  }

  filterMarkers = (type) => {
    foursquare.venues.getVenues(params).then( results => {
      const markers = results.response.venues.map(venue => {
        return {
          title: venue.name,
          name: venue.name,
          position: {lat: venue.location.lat, lng: venue.location.lng},
          type: venue.categories[0] ? venue.categories[0].shortName : "none",
          animation: null
        }
      })
      if (type === "All"){
       this.setState({
         markers: markers,
         showingInfoWindow: false,
         activeMarker: {}
       })
        return
      }else{
        let typeMarkers = markers.filter(marker => marker.type === type)
        this.setState({
          markers: typeMarkers,
          showingInfoWindow: false,
          activeMarker: {}
        })
      }
    });
  }


  onMarkerClick = (marker) => {
    if(this.state.activeMarker.name &&
       this.state.activeMarker.animation != null &&
       this.state.activeMarker !== marker){
      const markers = this.state.markers.map(m => {
                        if (m === this.state.activeMarker){
                          m.animation = null
                        }
                        return m
                      })
      this.setState({
        markers: markers
      })
    }
    marker.animation = window.google.maps.Animation.BOUNCE
      this.setState({
        showingInfoWindow: true,
        activeMarker: marker
      })
  }

  onListClick = (e, marker) => {
    e.preventDefault()
    this.onMarkerClick(marker)
  }



  render() {
    const { markers, showingInfoWindow, activeMarker } = this.state

    return (
      <div className="app">
        <TopBar title={'Lander'}/>

        <main>
          <LanderMap
            markers={markers}
            onMarkerClick={this.onMarkerClick}
            showingInfoWindow={showingInfoWindow}
            activeMarker={activeMarker}/>

          <ListView
            markers={markers}
            filterMarkers={this.filterMarkers}
            onListClick={this.onListClick} />
        </main>
      </div>
    )
  }
}

export default App
