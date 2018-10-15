// Based off https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
import React from 'react'
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
      <path d='M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z'
      />
    </svg>
  )
}

export default SVG
