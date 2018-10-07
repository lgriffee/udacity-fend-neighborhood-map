import React, { Component } from 'react'
import LanderMap from '../components/LanderMap'
import LocationMarkers from '../data/LocationMarkers.json'
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
    this.closeMarkers()
    if (type === "all"){
     this.setState({ markers: LocationMarkers })
      return
    }else{
      let typeMarkers = LocationMarkers.filter(marker => marker.type === type)
      this.setState({ markers: typeMarkers })
    }
  }

  closeMarkers = () => {
    const closedMarkers = this.state.markers.map(marker => {
      marker.isOpen = false
      marker.animation = null
      return marker
    })
    this.setState({ markers: closedMarkers })
  }

  onMarkerClick = (marker) => {
    this.closeMarkers()
    marker.isOpen = true
    marker.animation = window.google.maps.Animation.DROP
    this.setState({
      markers: this.state.markers,
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
                <option value="all">Select Location Type:</option>
                <option value="restaurant">Restaurant</option>
                <option value="bar">Bar</option>
                <option value="store">Shopping</option>
                <option value="business">Business</option>
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
