import React from 'react'
import Post from '../components/Posts/Post'

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data
  return <Post key={markdownRemark.id} post={markdownRemark} isHome={false} />
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        date(formatString: "MM月DD, YYYY")
        path
        title
      }
    }
  }
`
