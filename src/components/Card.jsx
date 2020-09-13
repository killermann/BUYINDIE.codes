import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby-plugin-modal-routing"
import PropTypes from "prop-types"
import React from "react"

export const Card = props => {
  const {
    bizName,
    bizDescription,
    url,
    slug,
    category,
    navigation,
    logo: {
      localFiles: [logo],
    },
  } = props

  return (
    <div className="relative bg-gray-100 h-full shadow-sm rounded-lg overflow-hidden hover:bg-gray-200 transition-all duration-500 ease-in-out">
      <Link to={`/${slug}`} state={{ navigation }} asModal>
        <div className="p-8 pb-0">
          <Img  
            className="max-h-24"
            fluid={logo.childImageSharp.fluid} 
            alt={bizName} 
            imgStyle={{ objectFit: 'contain', objectPosition: "50% 50%" }}
          />
        </div>
        <div className="p-8">
          <h3 className="text-lg lg:text-xl mb-3 leading-none">
            {bizName}
          </h3>
          <h4 className="font-black text-sm lg:text-base mb-3 leading-none">
            {category}
          </h4>
          <p className="text-base lg:text-lg text-blue-900 mb-10">
            {bizDescription}
          </p>
        </div>
      </Link>
      <div className="absolute bottom-0 inset-x-0 flex justify-between text-sm md:text-base font-bold">
        <Link to={`/${slug}`} state={{ navigation }} className="flex pt-2 pb-6 pl-8 hover:underline" title="Read more about {bizName}">
          Read more
        </Link>
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex pt-2 items-center pb-6 pr-8 hover:underline">
          Visit store <svg className="ml-1 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="Group 12" fill="currentColor"><path d="M54 36.8a2 2 0 00-.2-1.1 2.1 2.1 0 00-.6-1 2.8 2.8 0 00-4 0l-.5.6a2.8 2.8 0 00-.3 1.4 113.8 113.8 0 00-.5 17.3l.1 2.2h-1.5l-4.2-.4-8.3-.6a453.3 453.3 0 00-23.3-1.1 316 316 0 01.1-31l.3-5.7a71.7 71.7 0 019.6.7c3 .5 5.2-1 5.5-4.1.2-2.3-1.8-3.2-3.5-2.8h-.5L11.5 11h-3a3 3 0 00-2 .8l-.4.6a2.8 2.8 0 00-.4 1.4l-1 17c-.2 5.6-.2 11.2 0 16.8q.1 4.7.5 9.4a3.2 3.2 0 00.9 2 3 3 0 002 .9c4.3 0 8.7 0 13 .3l12.9.8 13 1 3.1.1a3.5 3.5 0 003.3-1.7 4 4 0 00.3-.7v-.1a4.6 4.6 0 00.1-1v-.8l-.4-6.5a116.7 116.7 0 01.5-12.8z"/><path d="M59 3.6A3.6 3.6 0 0057.3 2a3.2 3.2 0 00-1.7 0l-1 .3a3.2 3.2 0 00-1.6 0 66.5 66.5 0 01-8 1.7l-5.6.5A3.2 3.2 0 0036 7.8a3.2 3.2 0 003.2 3.1q3.4-.2 6.7-.7l1-.1-4.7 5-3 3c-1 1-2.1 2.6-3.1 3.9l-3.3 3.8-3 3c-2.2 2-4.3 3.8-6.3 5.8l-.4.4a2.7 2.7 0 00-.6.5 28.5 28.5 0 00-5.8 7.9 3.7 3.7 0 00.5 4.4c1.3 1.3 3.7 1.4 5.3 1.3a3.2 3.2 0 001.8-5.6l1-1.5a53.8 53.8 0 015.8-6c2.2-2 4.4-3.9 6.4-6 2.3-2.5 4.3-5.3 6.6-7.8 2-2.2 4.2-4.2 6.3-6.4l2.4-3a110.5 110.5 0 01-.6 7 2.5 2.5 0 00-.1 1.2 2.3 2.3 0 00.4 1.2 3.5 3.5 0 001.9 1.4 3.2 3.2 0 002.4-.3l.6-.5a3.3 3.3 0 00.9-1.4 113.8 113.8 0 001-12.8V5.2a3.2 3.2 0 00-.4-1.6z"/></g></svg>
        </a>

      </div>
    </div>
  )
}

Card.propTypes = {
  bizName: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    localFiles: PropTypes.array,
  }).isRequired,
  bizDescription: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    current: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

Card.defaultProps = {
  navigation: {},
}

export const query = graphql`
  fragment CardImageFragment on AirtableField {
    localFiles {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`