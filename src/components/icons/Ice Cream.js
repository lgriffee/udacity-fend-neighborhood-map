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
      <path d='M12,2C14.21,2 16,3.79 16,6.05C17.14,6.28 18,7.29 18,8.5A2.5,2.5 0 0,1 15.5,11H8.5A2.5,2.5 0 0,1 6,8.5C6,7.29 6.86,6.28 8,6A4,4 0 0,1 12,2M9,12H15L13,22H11L9,12Z'
      />
    </svg>
  )
}

export default SVG
