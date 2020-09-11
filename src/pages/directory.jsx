import React from "react"
import { graphql } from "gatsby"
import { Cards, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"
import { Hero } from "../components/"

const DirectoryIndex = props => {
  const { data } = props
  const allPosts = data.items.nodes
  const emptyQuery = ""
  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  // https://www.aboutmonica.com/blog/create-gatsby-blog-search-tutorial

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props
    const posts = data.items.nodes || []
    const filteredData = posts.filter(post => {
      const { bizName, bizDescription, category, url } = post.data
      return (
        bizName.toLowerCase().includes(query.toLowerCase()) ||
        bizDescription.toLowerCase().includes(query.toLowerCase()) ||
        category.toLowerCase().includes(query.toLowerCase()) ||
        url.toLowerCase().includes(query.toLowerCase())
      )
    })
    setState({
      query,
      filteredData,
    })
  }
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <SiteMetadata
        title="#BUYINDIE Codes Directory"
        description="Use code BUYINDIE to get big discounts buying directly from small businesses and creators (instead of Amazon). Buy good. Do good. Feel good."
        image=""
      />

      <Hero 
        heading="Use Code BUYINDIE."
        graf="Buy directly from the small biz who made the thing you want. Shop on their site (not Amazon). When you’re checking out, add the promo code BUYINDIE for a huge discount. Buy good. Do good. Feel good."
      />
      <div id="search" className="px-4 mx-auto mb-6 max-w-sm lg:max-w-md relative text-gray-700">
        <input
          className="mx-auto w-full mb-6 rounded-lg searchInput bg-gray-100 p-4 pl-16 lg:pl-20 block theme-font placeholder-opacity-100 placeholder-current text-lg lg:text-xl"
          type="text"
          aria-label="Search"
          placeholder="Search the Directory"
          onChange={handleInputChange}
        />
        <div className="absolute left-0 top-0 pl-10 h-full flex items-center justify-center">
          <svg className="w-8 lg:w-10 h-8 lg:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="Path 9" d="M58.4 51.3l-1-1.4c-.4-.4-.6-1-.9-1.4a2.7 2.7 0 00-1.4-1.2l-2.7-3-3.3-3.7-2-2.5-1.1-1.5a20.4 20.4 0 001-2 17.6 17.6 0 001.2-3.4 38 38 0 00.8-4.1 42 42 0 00.1-7 21 21 0 00-1.5-7A16.6 16.6 0 0046 9.9a18.6 18.6 0 00-2.4-2.7 20.3 20.3 0 00-2.8-2.3l-2.8-1.6a20.1 20.1 0 00-2.2-.9L34.5 2A18 18 0 0031.3.6L29 .3a12.6 12.6 0 00-1.6-.1 11.2 11.2 0 00-2 .2 8 8 0 00-1.7.5l-2.2 1a8 8 0 00-1 .2 9.1 9.1 0 00-1.5.6 5.2 5.2 0 00-.8.5l-.3.3-.2.2-.9.5-4 3 .4-.3a17.6 17.6 0 00-4.4 4.8L8.2 13l-.6 1.3-.7 1.6a21.2 21.2 0 00-.7 2.3 27.2 27.2 0 00-.7 2.8 29.4 29.4 0 00-.3 4.2 14 14 0 00.2 2.1 8.3 8.3 0 00.7 2.5A12.1 12.1 0 008 32.4 15.6 15.6 0 009.1 35a16 16 0 002.3 3 19 19 0 002.8 2.6 58.4 58.4 0 005.3 3.2 18.4 18.4 0 006 2.6 23.2 23.2 0 003.2.3 18.7 18.7 0 002.9-.2 21.2 21.2 0 002.6-.5 9.7 9.7 0 001.2-.5c0 .2.2.3.3.4q4.8 5.3 9.3 10.9l3.5 4.3.9 1a6.7 6.7 0 00.6.7 3.4 3.4 0 002.2 1 3.2 3.2 0 002.8-2 6.5 6.5 0 01.5-1 8.6 8.6 0 00.6-.9 7.3 7.3 0 00.8-3.5 10.7 10.7 0 000-1.1 2.8 2.8 0 001.5-1.3 2.7 2.7 0 000-2.8zM33.2 40.5a14.2 14.2 0 01-2.5.6h-.2a15.5 15.5 0 01-3.6 0 8.4 8.4 0 01-1.4-.4c-1.5-.6-2.8-1.5-4.2-2.2s-2.7-1.6-4-2.5a19.6 19.6 0 01-2-1.8 2.7 2.7 0 00-.6-2.9 60 60 0 01-1.8-1.8l-.5-2.2v-3.5l.1-3.3a22.4 22.4 0 011.2-4.2 28 28 0 011.5-2.8l1-1.5.4-.7.8-.6 2.8-2A21 21 0 0123 7.3l-.4.2 2.8-1.3a9.8 9.8 0 011.6-.4 11.9 11.9 0 012.1 0 9.5 9.5 0 011.7.5l2.3 1 2 .7c.7.2 1.1.7 1.7 1l1.4.9a25.3 25.3 0 013 3 13.1 13.1 0 011.1 2 15.2 15.2 0 01.7 2 18.1 18.1 0 01.4 2.1c.2 1.3.2 2.7.2 4a35.3 35.3 0 01-.2 4.2 24 24 0 01-1.1 4.4l-.7 1.5a13.5 13.5 0 01-1 1.4 24 24 0 01-1.8 2.1l-2 1.8a30 30 0 01-3.6 2.1zm17.6 14.7L47.4 51a285 285 0 00-7.2-8.3l.4-.4 1.7-1.4.4.5 3.5 4.9 2.2 3.5 1.1 1.9 1.3 2.6.5 1.4z" fill="currentColor"/></svg>
        </div>
      </div>
      
     
      <Cards nodes={posts} />
    </Layout>
  )
}

export default DirectoryIndex

export const query = graphql`
  query DirectoryQuery($tableName: String!) {
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
