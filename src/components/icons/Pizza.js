// Based off https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const SVG = props => {

  SVG.propTypes = {
      width: PropTypes.number.isRequired
  }

  const { width } = props

  return (
    <svg
      style={{ width: width, height: width }}
      viewBox={`0 0 ${width} ${width}`}>
      <path d='M12,15A2,2 0 0,1 10,13C10,11.89 10.9,11 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M7,7C7,5.89 7.89,5 9,5A2,2 0 0,1 11,7A2,2 0 0,1 9,9C7.89,9 7,8.1 7,7M12,2C8.43,2 5.23,3.54 3,6L12,22L21,6C18.78,3.54 15.57,2 12,2Z'
      />
    </svg>
  )
}

export default SVG
