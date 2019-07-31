import { graphql } from 'gatsby'
import React from 'react'
import styles from 'styles/posts.module.css'
import Title from '../components/Posts/Title'
import SEO from '../components/Seo'
import Tag from '../components/Tag'

const Tags = ({ tags }) => (
  <ul style={{ marginLeft: 0 }}>
    {tags.map((tag, i) => (
      <Tag key={i} value={tag.fieldValue} count={tag.totalCount} />
    ))}
  </ul>
)

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <div className={styles.article}>
    <SEO title="标签" />
    <Title>标签</Title>
    <Tags tags={group} />
  </div>
)

export default TagsPage

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
