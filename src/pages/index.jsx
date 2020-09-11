import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata        
        title="#BUYINDIE"
        description="Use code BUYINDIE to get big discounts buying directly from small businesses and creators (instead of Amazon). Buy good. Do good. Feel good."
        image=""
      />

      <Hero 
        heading="Use Code BUYINDIE."
        graf="Buy directly from the small biz who made the thing you want. Shop on their site (not Amazon). When you’re checking out, add the promo code BUYINDIE for a huge discount. Buy good. Do good. Feel good."
      />
      <div className="px-4 mx-auto mb-6 max-w-sm lg:max-w-md relative text-gray-700 text-center">
        <a
          className="cta-button mx-auto inline-block mb-6 rounded-lg searchInput bg-gray-100 p-4 px-16 lg:px-20 block theme-font placeholder-opacity-100 placeholder-current text-lg lg:text-xl text-center"
          href="directory"
        >
          Find an Indie Biz
        </a>
      </div>
      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    items: allAirtable(filter: {table: {eq: $tableName }, data: {status: {eq: "publish"}}}) {
      nodes {
        data {
          bizName
          bizDescription
          url
          category
          logo {
            ...CardImageFragment
          }
          slug
        }
      }
    }
  }
`
