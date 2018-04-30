import React from 'react'

import Tag from '../components/Tag'
import Title from '../components/Posts/Title'

const Tags = ({ tags }) => (
  <ul style={{ marginLeft: 0 }}>
    {tags.map(tag => <Tag value={tag.fieldValue} count={tag.totalCount} />)}
  </ul>
)

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => {
  return (
    <div style={{ padding: '30px 0' }}>
      <Title>标签</Title>
      <Tags tags={group} />
    </div>
  )
}

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
