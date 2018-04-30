import React from 'react'
import Posts from '../components/Posts'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => <Posts posts={edges} />
export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { id: { regex: "/posts/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM月DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
