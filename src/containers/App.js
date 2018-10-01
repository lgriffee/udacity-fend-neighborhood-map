import React, { Component } from 'react';
import MapContainer from '../components/MapContainer'
import LocationMarkers from '../api/LocationMarkers.json';
import './App.css';

class App extends Component {

  state = {
    markers: []
  }

  componentDidMount(){
    this.setState({ markers: LocationMarkers })
  }

  updateMarkers(type){
    if (type === "all"){
      this.setState({ markers: LocationMarkers })
      return
    }else{
      let typeMarkers = LocationMarkers.filter(marker => marker.type === type);
      this.setState({ markers: typeMarkers })
    }
  }

  onListItemSelect(marker) {

  }

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
          />

          <section className="list-view">
            <select
              className="location-select"
              name="location-types"
              onChange={(event) => this.updateMarkers(event.target.value)}
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
                  onClick={this.onListItemSelect(marker)}>
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
