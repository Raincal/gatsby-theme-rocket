import React from 'react'
import Posts from '../components/Posts'
import Intro from '../components/Intro'

const TagTemplage = ({ pathContext, data }) => {
  const { tag } = pathContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <div>
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
