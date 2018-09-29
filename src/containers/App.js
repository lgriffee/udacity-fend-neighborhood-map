import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <body>
        <header>
          <nav className="top-nav">
            <h1>LANDER</h1>
          </nav>
        </header>

        <main>
          <section className="map" >
            <h2>Map</h2>
          </section>

          <section className="list-view">
            <h2>List View</h2>
          </section>
        </main>
      </body>
    );
  }
}

export default App;
