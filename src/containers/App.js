import React, { Component } from 'react'
import './App.css'

import TopBar from '../components/TopBar'
import LanderMap from '../components/LanderMap'
import ListView from '../components/ListView'
import Footer from '../components/Footer'

import { Dialog, DialogTitle, DialogContent, DialogActions, DialogButton } from '@rmwc/dialog';
import '@material/dialog/dist/mdc.dialog.css';
import '@material/button/dist/mdc.button.css';



// Based off react-foursquare docs (https://github.com/foursquare/react-foursquare)
var foursquare = require('react-foursquare')({
  clientID: ${{ secrets.FSQ_CLIENT_ID }},
  clientSecret: ${{ secrets.FSQ_CLIENT_SECRET }}
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
    activeMarker: {},
    error: ""
  }


  // Fetch venue data from Foursquare and save to marker state array
  componentDidMount(){
    foursquare.venues.getVenues(params).then( results => {
      if (results.response.venues){
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
    }else{
      this.setState({
        standardDialogOpen: true,
        error: "Unable to retrive venue data from Foursquare API"
      })
    }
    }).catch((err) => {
      this.setState({
        standardDialogOpen: true,
        error: err
      })
    })
  }


  // Filter down venues by type selected
  filterMarkers = (type) => {
    // Fetch all venue data from Foursquare
    foursquare.venues.getVenues(params).then( results => {
      if (results.response.venues){
        const markers = results.response.venues.map(venue => {
          return {
            title: venue.name,
            name: venue.name,
            position: {lat: venue.location.lat, lng: venue.location.lng},
            type: venue.categories[0] ? venue.categories[0].shortName : "none",
            animation: null
          }
        })
        // Render all venue markers when select is "all"
        if (type === "All"){
         this.setState({
           markers: markers,
           showingInfoWindow: false,
           activeMarker: {}
         })
          return
        }else{
          // Only render markers of same type selected
          let typeMarkers = markers.filter(marker => marker.type === type)
          this.setState({
            markers: typeMarkers,
            showingInfoWindow: false,
            activeMarker: {}
          })
        }
      }else{
        this.setState({
          standardDialogOpen: true,
          error: "Unable to retrive venue info from Foursquare API"
        })
      }
    }).catch((err) => {
      this.setState({
        standardDialogOpen: true,
        error: err
      })
      return
    })
  }


  // Clicking marker animates it and shows info window
  onMarkerClick = (marker) => {
    // Stop animating markers that aren't the active marker
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
    // Animate markers when clicked
    marker.animation = window.google.maps.Animation.BOUNCE
      this.setState({
        showingInfoWindow: true,
        activeMarker: marker
      })
  }


  // Clicking list item animates corresponding marker and shows info window
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
          <Dialog
            className="error-dialog"
            open={this.state.standardDialogOpen}
            onClose={evt => {
              this.setState({standardDialogOpen: false})
            }}>
            <DialogTitle>The following error occured:</DialogTitle>
            <DialogContent>{this.state.error}.</DialogContent>
            <DialogActions>
              <DialogButton action="close" isDefaultAction>Okay</DialogButton>
            </DialogActions>
          </Dialog>

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

        <Footer/>
      </div>
    )
  }
}

export default App
