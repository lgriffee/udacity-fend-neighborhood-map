import React from 'react'
import logo from '../images/Foursquare-Logo.png';

const Footer = () => {

  return (
    <footer>
      <div className="footer">
        <p>Powered by</p>
        <a href="https://foursquare.com/">
          <img src={logo} alt="Foursquare"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer
