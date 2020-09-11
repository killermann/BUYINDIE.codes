import PropTypes from "prop-types"
import React from "react"

export const Hero = props => {
  const { heading, graf } = props

  return (
    <div className="spiral-bg py-12 md:py-18 lg:py-24">
      <div className="relative container overflow-visible">
        <div className="text-center px-4">
          <h1 className="theme-font text-2xl md:text-3xl lg:text-4xl mx-auto mb-6 font-bold leading-none">
            {heading}
          </h1>
          <p className="text-lg lg:text-xl font-medium md:w-2/3 mx-auto">{graf}</p>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  graf: PropTypes.string,
}
