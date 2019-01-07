import { graphql, Link } from 'gatsby'
import React from 'react'
import 'styles/global/oceanic-next.css'
import Comment from '../components/Comment'
import Layout from '../components/Layout'
import Pagination from '../components/Posts/Pagination'
import Post from '../components/Posts/Post'
import SEO from '../components/Seo'

const PostTemplate = ({ pageContext, data: { markdownRemark } }) => (
  <Layout>
    <SEO title={markdownRemark.frontmatter.title} />
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
  </Layout>
)

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      # tableOfContents
      frontmatter {
        date(formatString: "MM月DD, YYYY")
        path
        title
      }
    }
  }
`
