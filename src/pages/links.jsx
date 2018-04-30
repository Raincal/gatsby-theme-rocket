import React from 'react'
import Post from '../components/Posts/Post'

const Links = ({ data: { markdownRemark } }) => {
  return <Post post={markdownRemark} isHome={false} />
}

export default Links

export const pageQuery = graphql`
  query LinksQuery {
    markdownRemark(frontmatter: { path: { eq: "links" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
