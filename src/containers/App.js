import React, { Component } from 'react'
import MapContainer from '../components/MapContainer'
import LanderMap from '../components/LanderMap'
import {Marker} from 'google-maps-react'
import LocationMarkers from '../api/LocationMarkers.json'
import './App.css'

class App extends Component {

  state = {
    markers: [],
    showingInfoWindow: false,
    activeMarker: {}
  }

  componentDidMount(){

    this.setState({ markers: LocationMarkers })
  }

  filterMarkers(type){
    if (type === "all"){
     this.setState({ markers: LocationMarkers })
      return
    }else{
      let typeMarkers = LocationMarkers.filter(marker => marker.type === type)
      this.setState({ markers: typeMarkers })
    }
  }

 // Based off documentation examples react-google-maps documentation
  onMarkerClick = (marker) => {
    marker.isOpen = true
    this.setState({ markers: this.state.markers })
  }

  // Based off documentation examples react-google-maps documentation
  // onMapClicked = (props) => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     })
  //   }
  // };


  // onListClick = (e, marker) => {
  //   e.preventDefault()
  //   console.log(marker)
  //   this.onMarkerClick(marker.props, marker.ref)
  // };


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
            onMarkerClick={this.onMarkerClick}/>

          <section className="list-view">
            <select
              className="location-select"
              name="location-types"
              onChange={(event) => this.filterMarkers(event.target.value)}
              aria-label="location type filter">
                <option value="all">Select Location Type:</option>
                <option value="restaurant">Restaurant</option>
                <option value="bar">Bar</option>
                <option value="store">Shopping</option>
                <option value="business">Business</option>
            </select>
            <hr/>
            <ol className="locations-list">
              {markers.map((marker) =>
                <a
                  key={marker.title}
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
