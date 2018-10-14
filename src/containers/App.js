import React, { Component } from 'react'
import './App.css'
import LanderMap from '../components/LanderMap'
import Icon from '../components/icons/Icon'
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
        return <Icon name="american" width={24} />
    case "Asian" :
        return <Icon name="asian" width={24} />
    case "Bakery":
        return <Icon name="bakery" width={24} />
    case "Bar":
        return <Icon name="bar" width={24} />
    case "Breakfast":
        return <Icon name="breakfast" width={24} />
    case "Burgers":
        return <Icon name="burgers" width={24} />
    case "Café":
        return <Icon name="coffee" width={24} />
    case "Coffee Shop":
        return <Icon name="coffee" width={24} />
    case "Ice Cream":
        return <Icon name="ice cream" width={24} />
    case "Fast Food":
        return <Icon name="fast food" width={24} />
    case "Juice Bar":
        return <Icon name="juice bar" width={24} />
    case "Mexican":
        return <Icon name="mexican" width={24} />
    case "Pizza":
        return <Icon name="pizza" width={24} />
    case "Sandwiches":
        return <Icon name="sandwiches" width={24} />
    case "Steakhouse":
        return <Icon name="steakhouse" width={24} />
    case "Sushi" :
        return <Icon name="asian" width={24} />
    case "Thai":
        return <Icon name="asian" width={24} />
    default:
        return <Icon name="food" width={24} />
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
