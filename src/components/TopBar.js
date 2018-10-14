import React, { Component } from 'react'
import PropTypes from 'prop-types'

const TopBar = props => {

  TopBar.propTypes = {
      title: PropTypes.string.isRequired
  }

  const { title } = props


  return (
    <header>
      <nav className="top-nav">
        <h1>{title}</h1>
      </nav>
    </header>
  )
}

export default TopBar
