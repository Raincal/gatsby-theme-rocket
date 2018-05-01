import Link from 'gatsby-link'
import React from 'react'
import Pagination from '../components/Posts/Pagination'
import Post from '../components/Posts/Post'

const PostTemplate = ({ pathContext, data }) => {
  const { markdownRemark } = data
  return (
    <div>
      <Post key={markdownRemark.id} post={markdownRemark} isHome={false} />
      <Pagination {...pathContext}>
        {({ prev, next }) => (
          <div>
            {prev && (
              <Link style={{ float: 'left' }} to={prev.slug}>
                {`« ${prev.title}`}
              </Link>
            )}
            {next && (
              <Link style={{ float: 'right' }} to={next.slug}>
                {`${next.title} »`}
              </Link>
            )}
          </div>
        )}
      </Pagination>
    </div>
  )
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
