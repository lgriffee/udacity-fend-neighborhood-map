import React, { Component } from 'react'
import LanderMap from '../components/LanderMap'
// import LocationMarkers from '../data/LocationMarkers.json'
import './App.css'

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
    foursquare.venues.getVenues(params)
      .then( results => {
        const markers = results.response.venues.map(venue => {
          return {
            title: venue.name,
            name: venue.name,
            position: {lat: venue.location.lat, lng: venue.location.lng},
            icon: {url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'},
            type: venue.categories[0] ? venue.categories[0].shortName : "none",
            isOpen: false,
            animation: null
          }
        })
        this.setState({ markers: markers })
      });
  }

  filterMarkers(type){
    foursquare.venues.getVenues(params)
      .then( results => {
        const markers = results.response.venues.map(venue => {
          return {
            title: venue.name,
            name: venue.name,
            position: {lat: venue.location.lat, lng: venue.location.lng},
            icon: {url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'},
            type: venue.categories[0] ? venue.categories[0].shortName : "none",
            isOpen: false,
            animation: null
          }
        })
        if (type === "all"){
         this.setState({
           markers: markers,
           showingInfoWindow: false
         })
          return
        }else{
          let typeMarkers = markers.filter(marker => marker.type === type)
          this.setState({
            markers: typeMarkers,
            showingInfoWindow: false
          })
        }
      });
  }


  onMarkerClick = (marker) => {
    if(this.state.activeMarker.name){
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
    marker.animation = window.google.maps.Animation.DROP
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker
    })
  }


  onListClick = (e, marker) => {
    e.preventDefault()
    this.onMarkerClick(marker)
  };


  render() {
    const { markers } = this.state
    return (
      <div className="app">
        <header>
          <nav className="top-nav">
            <h1>Lander</h1>
          </nav>
        </header>

        <main>
          <LanderMap
            markers={this.state.markers}
            onMarkerClick={this.onMarkerClick}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}/>

          <section className="list-view">
            <select
              className="location-select"
              name="location-types"
              onChange={(event) => this.filterMarkers(event.target.value)}
              aria-label="location type filter">
                <option value="all">Select Venue Type:</option>
                <option value="American">American</option>
                <option value="Asian">Asian</option>
                <option value="Bakery">Bakery</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Burgers">Burgers</option>
                <option value="Café">Café</option>
                <option value="Coffee Shop">Coffee Shop</option>
                <option value="Ice Cream">Ice Cream</option>
                <option value="Mexican">Mexican</option>
                <option value="Pizza">Pizza</option>
                <option value="Sandwiches">Sandwiches</option>
                <option value="Steakhouse">Steakhouse</option>
            </select>
            <hr/>
            <ol className="locations-list">
              {markers.map((marker, index) =>
                <a
                  key={index}
                  onClick={(event) => this.onListClick(event, marker)}>
                  {marker.title}
                </a>
              )}
            </ol>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
