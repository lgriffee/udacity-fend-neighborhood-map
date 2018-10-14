import React, { Component } from 'react'
import LanderMap from '../components/LanderMap'
import './App.css'

import { Select } from '@rmwc/select';
import '@material/select/dist/mdc.select.css';

import { List, ListGroup, ListDivider, SimpleListItem } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';



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

const americanIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
      <path d='M7.5,7.5C9.17,5.87 11.29,4.69 13.37,4.18C15.46,3.67 17.5,3.83 18.6,4C19.71,4.15 19.87,4.31 20.03,5.41C20.18,6.5 20.33,8.55 19.82,10.63C19.31,12.71 18.13,14.83 16.5,16.5C14.83,18.13 12.71,19.31 10.63,19.82C8.55,20.33 6.5,20.18 5.41,20.03C4.31,19.87 4.15,19.71 4,18.6C3.83,17.5 3.67,15.46 4.18,13.37C4.69,11.29 5.87,9.17 7.5,7.5M7.3,15.79L8.21,16.7L9.42,15.5L10.63,16.7L11.54,15.79L10.34,14.58L12,12.91L13.21,14.12L14.12,13.21L12.91,12L14.58,10.34L15.79,11.54L16.7,10.63L15.5,9.42L16.7,8.21L15.79,7.3L14.58,8.5L13.37,7.3L12.46,8.21L13.66,9.42L12,11.09L10.79,9.88L9.88,10.79L11.09,12L9.42,13.66L8.21,12.46L7.3,13.37L8.5,14.58L7.3,15.79Z'/>
  </svg>
const asianIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
    <path d='M22,11H19.7C19.4,9.9 18.9,8.8 18.2,8L21.6,2.6L19.9,1.5L16.7,6.6C16.3,6.3 16,6.1 15.5,5.9L16.4,2.3L14.5,1.8L13.7,5.2C13.1,5.1 12.6,5 12,5C8.3,5 5.2,7.6 4.3,11H2C2,15.1 4.5,18.6 8,20.2V22H16V20.2C19.5,18.6 22,15.1 22,11M12,7C14.6,7 16.8,8.7 17.6,11H6.4C7.2,8.7 9.4,7 12,7Z'/>
  </svg>
const bakeryIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
    <path d='M22,19L19,17L22,15V19M15,15L19,9L22,13L18,16L15,15M5,17L2,19V15L5,17M9,15L6,16L2,13L5,9L9,15M14,6L18,8L13,15H11L6,8L10,6H14Z'/>
  </svg>
const barIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
      <path d='M15.5,21.27L14.66,21.18C13.9,21.11 13.25,20.6 13,19.87C12.47,17.91 12.47,15.83 13,13.87C15.32,13.4 17,11.37 17,9C17,7 15,2 15,2H9C9,2 7,7 7,9C7,11.38 8.67,13.42 11,13.9C11.53,15.86 11.53,17.94 11,19.9C10.76,20.62 10.12,21.13 9.37,21.21L8.5,21.3C8.5,21.3 8,21.28 8,22H16C16,21.28 15.5,21.27 15.5,21.27M9.44,7L10.44,4H13.56L14.56,7H9.44Z'/>
  </svg>
const breakfastIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
    <path d='M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M5,16H19A1,1 0 0,1 20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17A1,1 0 0,1 5,16M17,20A1,1 0 0,1 18,21A1,1 0 0,1 17,22H7A1,1 0 0,1 6,21A1,1 0 0,1 7,20H17M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7Z'/>
  </svg>
const burgersIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
      <path d='M15.5,21L14,8H16.23L15.1,3.46L16.84,3L18.09,8H22L20.5,21H15.5M5,11H10A3,3 0 0,1 13,14H2A3,3 0 0,1 5,11M13,18A3,3 0 0,1 10,21H5A3,3 0 0,1 2,18H13M3,15H8L9.5,16.5L11,15H12A1,1 0 0,1 13,16A1,1 0 0,1 12,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15Z'/>
  </svg>
const cafeIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
      <path d='M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z'/>
  </svg>
const coffeeShopIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
    <path d='M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z'/>
  </svg>
const fastFoodIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
    <path d='M15,4A8,8 0 0,1 23,12A8,8 0 0,1 15,20A8,8 0 0,1 7,12A8,8 0 0,1 15,4M15,6A6,6 0 0,0 9,12A6,6 0 0,0 15,18A6,6 0 0,0 21,12A6,6 0 0,0 15,6M14,8H15.5V11.78L17.83,14.11L16.77,15.17L14,12.4V8M2,18A1,1 0 0,1 1,17A1,1 0 0,1 2,16H5.83C6.14,16.71 6.54,17.38 7,18H2M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H5.05L5,12L5.05,13H3M4,8A1,1 0 0,1 3,7A1,1 0 0,1 4,6H7C6.54,6.62 6.14,7.29 5.83,8H4Z'/>
  </svg>
const foodIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
      <path d='M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.36,10.22L13.16,10C12.38,9.23 12.38,7.97 13.16,7.19L17.5,2.82L18.43,3.74L15.19,7L16.15,7.94L19.39,4.69L20.31,5.61L17.06,8.85L18,9.81L21.26,6.56L22.18,7.5L17.81,11.84C17.03,12.62 15.77,12.62 15,11.84L14.78,11.64L13.41,13Z'/>
  </svg>
const iceCreamIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
      <path d='M12,2C14.21,2 16,3.79 16,6.05C17.14,6.28 18,7.29 18,8.5A2.5,2.5 0 0,1 15.5,11H8.5A2.5,2.5 0 0,1 6,8.5C6,7.29 6.86,6.28 8,6A4,4 0 0,1 12,2M9,12H15L13,22H11L9,12Z'/>
  </svg>
const juiceBarIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
    <path d='M4,2H19L17,22H6L4,2M6.2,4L7.8,20H8.8L7.43,6.34C8.5,6 9.89,5.89 11,7C12.56,8.56 15.33,7.69 16.5,7.23L16.8,4H6.2Z'/>
  </svg>
const mexicanIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
    <path d='M19,18H5A4,4 0 0,1 1,14A8,8 0 0,1 9,6C10.06,6 11.07,6.21 12,6.58C12.93,6.21 13.94,6 15,6A8,8 0 0,1 23,14A4,4 0 0,1 19,18M3,14A2,2 0 0,0 5,16A2,2 0 0,0 7,14C7,11.63 8.03,9.5 9.67,8.04L9,8A6,6 0 0,0 3,14M19,16A2,2 0 0,0 21,14A6,6 0 0,0 15,8A6,6 0 0,0 9,14C9,14.73 8.81,15.41 8.46,16H19Z'/>
  </svg>
const pizzaIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
      <path d='M12,15A2,2 0 0,1 10,13C10,11.89 10.9,11 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M7,7C7,5.89 7.89,5 9,5A2,2 0 0,1 11,7A2,2 0 0,1 9,9C7.89,9 7,8.1 7,7M12,2C8.43,2 5.23,3.54 3,6L12,22L21,6C18.78,3.54 15.57,2 12,2Z'/>
  </svg>
const sandwichesIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
      <path d='M2,16H22V18C22,19.11 21.11,20 20,20H4C2.89,20 2,19.11 2,18V16M6,4H18C20.22,4 22,5.78 22,8V10H2V8C2,5.78 3.78,4 6,4M4,11H15L17,13L19,11H20C21.11,11 22,11.89 22,13C22,14.11 21.11,15 20,15H4C2.89,15 2,14.11 2,13C2,11.89 2.89,11 4,11Z'/>
  </svg>
const steakhouseIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
      <path d='M10.5,18A0.5,0.5 0 0,1 11,18.5A0.5,0.5 0 0,1 10.5,19A0.5,0.5 0 0,1 10,18.5A0.5,0.5 0 0,1 10.5,18M13.5,18A0.5,0.5 0 0,1 14,18.5A0.5,0.5 0 0,1 13.5,19A0.5,0.5 0 0,1 13,18.5A0.5,0.5 0 0,1 13.5,18M10,11A1,1 0 0,1 11,12A1,1 0 0,1 10,13A1,1 0 0,1 9,12A1,1 0 0,1 10,11M14,11A1,1 0 0,1 15,12A1,1 0 0,1 14,13A1,1 0 0,1 13,12A1,1 0 0,1 14,11M18,18C18,20.21 15.31,22 12,22C8.69,22 6,20.21 6,18C6,17.1 6.45,16.27 7.2,15.6C6.45,14.6 6,13.35 6,12L6.12,10.78C5.58,10.93 4.93,10.93 4.4,10.78C3.38,10.5 1.84,9.35 2.07,8.55C2.3,7.75 4.21,7.6 5.23,7.9C5.82,8.07 6.45,8.5 6.82,8.96L7.39,8.15C6.79,7.05 7,4 10,3L9.91,3.14V3.14C9.63,3.58 8.91,4.97 9.67,6.47C10.39,6.17 11.17,6 12,6C12.83,6 13.61,6.17 14.33,6.47C15.09,4.97 14.37,3.58 14.09,3.14L14,3C17,4 17.21,7.05 16.61,8.15L17.18,8.96C17.55,8.5 18.18,8.07 18.77,7.9C19.79,7.6 21.7,7.75 21.93,8.55C22.16,9.35 20.62,10.5 19.6,10.78C19.07,10.93 18.42,10.93 17.88,10.78L18,12C18,13.35 17.55,14.6 16.8,15.6C17.55,16.27 18,17.1 18,18M12,16C9.79,16 8,16.9 8,18C8,19.1 9.79,20 12,20C14.21,20 16,19.1 16,18C16,16.9 14.21,16 12,16M12,14C13.12,14 14.17,14.21 15.07,14.56C15.65,13.87 16,13 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13 8.35,13.87 8.93,14.56C9.83,14.21 10.88,14 12,14M14.09,3.14V3.14Z'
      />
  </svg>
const thaiIcon =
  <svg style={{ width: 24, height: 24 }} viewBox='0 0 24 24'>
    <path d='M13.75,9L14.95,8.24C15.58,8.58 16,9.24 16,10V21.75C16,21.75 8,20 8,11V10C8,9.27 8.39,8.63 8.97,8.28L10.43,9L12,8L13.75,9M10,2C11.53,2 12.8,3.15 13,4.64C14,4.93 14.81,5.67 15.22,6.63L13.75,7.5L12,6.5L10.43,7.5L8.76,6.67C9.15,5.72 9.95,5 10.94,4.66C10.8,4.28 10.43,4 10,4V2Z'/>
  </svg>


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
            type: venue.categories[0] ? venue.categories[0].shortName : "none",
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
            type: venue.categories[0] ? venue.categories[0].shortName : "none",
            animation: null
          }
        })
        if (type === "All"){
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
  };

  getTypeIcon(type){
    switch(type) {
    case "American":
        return americanIcon
    case "Asian" :
        return asianIcon
    case "Bakery":
        return bakeryIcon
    case "Bar":
        return barIcon
    case "Breakfast":
        return breakfastIcon
    case "Burgers":
        return burgersIcon
    case "Café":
        return cafeIcon
    case "Coffee Shop":
        return coffeeShopIcon
    case "Ice Cream":
        return iceCreamIcon
    case "Fast Food":
        return fastFoodIcon
    case "Juice Bar":
        return juiceBarIcon
    case "Mexican":
        return mexicanIcon
    case "Pizza":
        return pizzaIcon
    case "Sandwiches":
        return sandwichesIcon
    case "Steakhouse":
        return steakhouseIcon
    case "Sushi" :
        return asianIcon
    case "Thai":
        return asianIcon
    default:
        return foodIcon
}
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
          <LanderMap
            markers={this.state.markers}
            getTypeIcon={this.getTypeIcon}
            onMarkerClick={this.onMarkerClick}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}/>

          <section className="list-view">
            <div className="list-view-wrapper">
                <Select
                  className="location-select"
                  label="Cuisine Type"
                  placeholder=""
                  options={['All','American', 'Asian', 'Bakery', 'Bar', 'Breakfast', 'Burgers',
                            'Café', 'Coffee Shop', 'Fast Food', 'Ice Cream', 'Juice Bar', 'Mexican',
                            'Pizza', 'Sandwiches', 'Steakhouse', 'Sushi', 'Thai']}
                  onChange={(event) => this.filterMarkers(event.target.value)}
                />
                <div className="locations-list">
                <List twoLine avatarList>
                    {markers.map((marker, index) =>
                      <ListGroup
                        key={index}
                        onClick={(event) => this.onListClick(event, marker)}>
                      <SimpleListItem
                        graphic={this.getTypeIcon(marker.type)}
                        text={marker.title}
                        secondaryText={marker.type}/>
                        <ListDivider />
                      </ListGroup>
                    )}
                </List>
                </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
