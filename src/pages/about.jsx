import React from 'react'
import { Helmet } from 'react-helmet'
import Comment from '../components/Comment'
import Layout from '../components/Layout'
import Post from '../components/Posts/Post'
import config from '../config'

const About = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <Helmet title={`关于 - ${config.title}`} />
      <Post post={markdownRemark} isHome={false} />
      <Comment />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { path: { eq: "about" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
