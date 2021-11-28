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
      <path fill-rule="evenodd" d="m2.1016 5.9336-0.035156 0.015625c0.007813 0.019531 0.015625 0.039062 0.019532 0.058593 0.69922 3.2227 2.1719 3.5547 4.6914 4.1211 0.33984 0.078125 0.69922 0.16016 1.0938 0.25391l6.8945 1.6836c1.0469 0.21484 2.0586 0.25 2.9922 0.066406 0.62891-0.125 1.2227-0.35156 1.7656-0.6875-1.793 0.011719-3.0898-0.44531-4.8516-1.207-2.8398-1.2344-4.8086-2.8789-7.1367-3.9219-1.7188-0.76953-3.4961-1.1172-5.4336-0.38281zm-0.70703 0.28906c-0.74219 0.23828-1.25 0.12109-1.3047-0.66797-0.042969-0.86328 0.38672-1.6992 1.2813-2.5078 5.4414-4.9375 14.578-3.6562 18.879 2.2891 1.3164 1.8242 2.1641 3.4375 3.6602 5.332-0.59375 0.32031-1.1953 0.54297-1.8125 0.63281-0.16016 0.027344-0.77734 0.066407-1.4336 0.10156-0.015624 0.085937-0.058593 0.16797-0.12891 0.22266-0.78125 0.65234-1.6758 1.0547-2.6445 1.2461-1.0234 0.20312-2.1289 0.16406-3.2617-0.066406l-6.9219-1.6914c-0.36719-0.089843-0.73047-0.17188-1.082-0.25-2.7891-0.62891-4.4219-1-5.2305-4.6406zm7.0312-3.9492c1.2891-0.51172 2.6055-0.79297 3.6016-0.65234-0.72656 0.48438-1.5117 0.92188-2.4414 1.3047 0.003906 0.97656-0.11328 2.1719-0.32031 3.1367-0.17578-1.2695-0.42578-2.7344-0.83984-3.7891zm7.6953 3.7695c1.3281-0.38672 2.6641-0.54297 3.6445-0.30859-0.76562 0.41406-1.5859 0.77344-2.543 1.0664-0.085937 0.97266-0.30078 2.1523-0.59375 3.0938-0.066406-1.2812-0.1875-2.7617-0.50781-3.8516zm-3.6406-2.2305c1.3281-0.38672 2.6641-0.54297 3.6445-0.30859-0.76562 0.41406-1.5859 0.77344-2.543 1.0664-0.085937 0.97266-0.30078 2.1523-0.59375 3.0938-0.066406-1.2812-0.19141-2.7617-0.50781-3.8516z"/>
    </svg>
  )
}

export default SVG