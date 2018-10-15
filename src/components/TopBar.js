import React from 'react'
import PropTypes from 'prop-types'

const TopBar = props => {

  TopBar.propTypes = {
      title: PropTypes.string.isRequired
  }

  const { title } = props


  return (
    <header>
      <div className="top-bar">
        <h1>{title}</h1>
      </div>
    </header>
  )
}

export default TopBar
