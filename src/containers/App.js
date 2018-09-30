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

  render() {
    const { markers } = this.state
    return (
      <div>
        <header>
          <nav className="top-nav">
            <h1>Lander</h1>
          </nav>
        </header>

        <main>
          <section className="map" role="application" aria-label="Map of Lander">
            <MapContainer
              markers={this.state.markers}
            />
          </section>

          <section className="list-view">
            <h2>List View</h2>
            <input
              type="text"
              placeholder="Search"
              // value={query}
              // onChange= {(event) => this.updateQuery(event.target.value)}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
