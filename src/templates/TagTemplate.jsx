import React from 'react'
import { Helmet } from 'react-helmet'
import Intro from '../components/Intro'
import Posts from '../components/Posts'
import config from '../config'
const TagTemplage = ({ pathContext, data }) => {
  const { tag } = pathContext
  const { edges, totalCount } = data.allMarkdownRemark
  const title = `标签${tag}下的文章`

  return (
    <div>
      <Helmet title={`${title} - ${config.title}`} />
      <Intro tag={tag} />
      <Posts posts={edges} />
    </div>
  )
}

export default TagTemplage

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM月DD,YYYY")
            path
            title
          }
        }
      }
    }
  }
`
