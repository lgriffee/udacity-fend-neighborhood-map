// Based off https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import American from "./American"
import Asian from "./Asian"
import Bakery from "./Bakery"
import Bar from "./Bar"
import Breakfast from "./Breakfast"
import Burgers from "./Burgers"
import Coffee from "./Coffee"
import FastFood from "./Fast Food"
import Food from "./Food"
import IceCream from "./Ice Cream"
import JuiceBar from "./Juice Bar"
import Mexican from "./Mexican"
import Pizza from "./Pizza"
import Sandwiches from "./Sandwiches"
import Steakhouse from "./Steakhouse"


const Icon = props => {

  Icon.propTypes = {
      name: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired
  }

  const { name, width } = props

  let getIcon = (name) => {
    switch (name) {
    case "american":
      return <American width={width} />
    case "asian":
      return <Asian width={width} />
    case "bakery":
      return <Bakery width={width} />
    case "bar":
      return <Bar width={width} />
    case "breakfast":
      return <Breakfast width={width} />
    case "burgers":
      return <Burgers width={width} />
    case "coffee":
      return <Coffee width={width} />
    case "fast food":
      return <FastFood width={width} />
    case "food":
      return <Food width={width} />
    case "ice cream":
      return <IceCream width={width} />
    case "juice bar":
      return <JuiceBar width={width} />
    case "mexican":
      return <Mexican width={width} />
    case "pizza":
      return <Pizza width={width} />
    case "sandwiches":
      return <Sandwiches width={width} />
    case "steakhouse":
      return <Steakhouse width={width} />
    default:
      return
    }
  }

  return (getIcon(name))
}

export default Icon
