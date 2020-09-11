import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { SiteMetadata } from "../components"
import { useModal } from "../context"
import { Layout } from "../layouts/Layout"

export default props => {
  const { data, location } = props
  const {
    bizName,
    bizDescription,
    url,
    owners,
    category,
    logo: {
      localFiles: [logo],
    },
    screenshot: {
      localFiles: [cover],
    },
  } = data.item.data
  const navigation = location.state ? location.state.navigation : null
  const { modal } = useModal()

  return (
    <Layout navigation={navigation}>
      <SiteMetadata title={bizName} description={bizDescription} image={cover.url} />
      <article className={modal && "max-h-90vh md:max-h-90vh overflow-hidden container"}>
        <div className="mx-auto relative pt-6 pb-0 md:py-12">
          <div className="w-full bg-yellow-100 absolute z-0 top-0 inset-x-0">
            <Img fluid={cover.childImageSharp.fluid} alt={bizName} className="opacity-15 z-0" />
            <div className="fade-to-white z-10 absolute inset-0"></div>
          </div>

          <div className="relative z-60 mb-6 md:mb-12">
            <Img  
              className="max-h-24"
              fluid={logo.childImageSharp.fluid} 
              alt={bizName} 
              imgStyle={{ objectFit: 'contain', objectPosition: "50% 50%" }}
            />
          </div>
          <div className="px-4">
            <div className="p-8 md:py-12 bg-white rounded-lg md:w-2/3 max-w-2xl text-center mx-auto relative z-50 shadow-top">
              <h1 className="text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
                {bizName}
              </h1>
              <h2 className="text-sm md:text-base lg:text-lg font-black mb-4">
                {category}
              </h2>
              <p className="text-sm md:text-base lg:text-lg font-medium mb-4 md:mb-8">
                {bizDescription}
              </p>
              <a href={`${url}/?utm_source=buyindie&utm_medium=site&utm_campaign=use_code_buyindie`} target="_blank" rel="noopener noreferrer" className="cta-button text-lg theme-font p-4 px-16 mb-4 md:mb-8 inline-block rounded-lg">
                Shop <span className="md:hidden">Now</span><span className="hidden md:inline">Using Code BUYINDIE</span>
              </a>
              <div className="w-full">
                <h4 className="text-xs md:text-sm lg:text-base font-black">
                  Owner(s) you're supporting:
                </h4>
                <span className="text-sm md:text-base lg:text-lg">
                  {owners}
                </span>
              </div>   
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query SingleItemQuery($slug: String!) {
    item: airtable(data: { slug: { eq: $slug } }) {
      data {
        bizName
        bizDescription
        url
        repName
        repRole
        owners
        category
        slug
        logo {
          localFiles {
            url: publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        screenshot {
          localFiles {
            url: publicURL
            childImageSharp {
              fluid(maxWidth: 900, maxHeight: 450, cropFocus: NORTH) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
