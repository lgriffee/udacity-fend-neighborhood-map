import React, { Component } from 'react'
import MapContainer from '../components/MapContainer'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import LocationMarkers from '../api/LocationMarkers.json'
import './App.css'

class App extends Component {

  state = {
    markers: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  componentDidMount(){

    // this.setState({ markers: LocationMarkers })
    const test = LocationMarkers.map((marker) =>
      <Marker
        key={marker.title}
        className={marker.type}
        onClick={this.onMarkerClick}
        title={marker.title}
        name={marker.name}
        position={marker.position}
        icon={marker.icon}
        animation={null}
        ref={React.createRef()}
      />
   )
   this.setState({ markers: test })
  }

  filterMarkers(type){
    const test = LocationMarkers.map((marker) =>
      <Marker
        key={marker.title}
        className={marker.type}
        onClick={this.onMarkerClick}
        title={marker.title}
        name={marker.name}
        position={marker.position}
        icon={marker.icon}
        animation={null}
        ref={React.createRef()}
      />
   )
    if (type === "all"){
     this.setState({ markers: test })
      return
    }else{
      // let typeMarkers = LocationMarkers.filter(marker => marker.type === type)
      // this.setState({ markers: typeMarkers })
      let typeMarkers = LocationMarkers.filter(marker => marker.props.className === type)
      this.setState({ markers: typeMarkers })
    }
  }

  onMarkerClick = (props, marker, e) => {
    console.log(props)
    console.log(marker)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  mysteriousFunction = () => {

  }

  onListClick = (e, marker) => {
    e.preventDefault()
    console.log(marker)
    this.onMarkerClick(marker.props, marker.ref)
    // this.onMarkerClick(marker, e)
    // console.log(marker.title)
    // console.log('The link was clicked.')
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
          <MapContainer
             markers={this.state.markers}
             showingInfoWindow={this.state.showingInfoWindow}
             activeMarker={this.state.activeMarker}
             selectedPlace={this.state.selectedPlace}
             onMarkerClick={this.onMarkerClick}
             onMapClicked={this.onMapClicked}
             mysteriousFunction={this.mysteriousFunction}
          />

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
                  key={marker.key}
                  onClick={(event) => this.onListClick(event, marker)}>
                  {marker.props.title}
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
