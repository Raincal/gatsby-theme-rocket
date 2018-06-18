import React from 'react'
import { Helmet } from 'react-helmet'
import Comment from '../components/Comment'
import Layout from '../components/Layout'
import Post from '../components/Posts/Post'
import config from '../config'

const Links = ({ data: { markdownRemark } }) => (
  <Layout>
    <Helmet title={`友链 - ${config.title}`} />
    <Post post={markdownRemark} isHome={false} />
    <Comment />
  </Layout>
)

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
