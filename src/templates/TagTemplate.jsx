import { graphql } from 'gatsby'
import React from 'react'
import Intro from '../components/Intro'
import Posts from '../components/Posts'
import SEO from '../components/Seo'

const TagTemplage = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark
  const title = `标签${tag}下的文章`

  return (
    <>
      <SEO title={title} />
      <Intro tag={tag} />
      <Posts posts={edges} />
    </>
  )
}

export default TagTemplage

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM月DD,YYYY")
            title
          }
        }
      }
    }
  }
`
