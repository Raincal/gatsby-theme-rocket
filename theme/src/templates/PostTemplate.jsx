import { graphql, Link } from 'gatsby'
import React from 'react'
import 'styles/global/oceanic-next.css'
import Comment from '../components/Comment'
import Pagination from '../components/Posts/Pagination'
import Post from '../components/Posts/Post'
import SEO from '../components/Seo'

const PostTemplate = ({ pageContext, data: { markdownRemark } }) => (
  <>
    <SEO
      title={markdownRemark.frontmatter.title}
      keywords={markdownRemark.frontmatter.tags}
      description={markdownRemark.excerpt}
    />
    <Post key={markdownRemark.id} post={markdownRemark} isHome={false} />
    <Pagination {...pageContext}>
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
    <Comment />
  </>
)

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      # tableOfContents
      excerpt(pruneLength: 150)
      frontmatter {
        date(formatString: "MM月DD, YYYY")
        title
        tags
      }
    }
  }
`
