import React from 'react'
import { Helmet } from 'react-helmet'
import Post from '../components/Posts/Post'
import config from '../config'

const About = ({ data: { markdownRemark } }) => {
  return (
    <div>
      <Helmet title={`关于 - ${config.title}`} />
      <Post post={markdownRemark} isHome={false} />
    </div>
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
