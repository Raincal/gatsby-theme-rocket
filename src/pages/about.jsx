import React from 'react'
import Post from '../components/Posts/Post'

const About = ({ data: { markdownRemark } }) => {
  return <Post post={markdownRemark} isHome={false} />
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
