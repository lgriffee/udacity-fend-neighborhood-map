import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../components/icons/Icon'

import { Select } from '@rmwc/select'
import '@material/select/dist/mdc.select.css'

import { List, ListGroup, ListDivider, SimpleListItem } from '@rmwc/list'
import '@material/list/dist/mdc.list.css'


const ListView = props => {

  ListView.propTypes = {
      markers: PropTypes.array.isRequired,
      filterMarkers: PropTypes.func.isRequired,
      onListClick: PropTypes.func.isRequired
  }

  let getTypeIcon = (type) => {
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

  const { markers, filterMarkers, onListClick } = props


  return (
    <section className="list-view">
      <div className="list-view-wrapper">
          <Select
            className="location-select"
            label="Cuisine Type"
            placeholder=""
            options={['All','American', 'Asian', 'Bakery', 'Bar', 'Breakfast', 'Burgers',
                      'Café', 'Coffee Shop', 'Fast Food', 'Ice Cream', 'Juice Bar', 'Mexican',
                      'Pizza', 'Sandwiches', 'Steakhouse', 'Sushi', 'Thai']}
            onChange={(event) => filterMarkers(event.target.value)}
          />
          <div className="locations-list">
          <List twoLine avatarList role="list">
              {markers.map((marker, index) =>
                <ListGroup
                  key={index}
                  onClick={(event) => onListClick(event, marker)}>
                <SimpleListItem
                  role="listitem"
                  graphic={getTypeIcon(marker.type)}
                  text={marker.title}
                  secondaryText={marker.type}/>
                  <ListDivider />
                </ListGroup>
              )}
          </List>
          </div>
      </div>
    </section>
  )
}

export default ListView
