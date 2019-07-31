import { graphql, Link } from 'gatsby'
import React from 'react'
import styles from 'styles/posts.module.css'
import Title from '../components/Posts/Title'
import SEO from '../components/Seo'

const ArchivesLinks = ({ posts }) => (
  <ul style={{ lineHeight: 1.8 }}>
    {posts.map(({ node: { fields, frontmatter } }, i) => {
      const { slug } = fields
      const { date, title } = frontmatter
      return (
        <li key={i}>
          <Link to={slug}>{title}</Link>{' '}
          <span
            style={{
              fontSize: 14,
              color: '#999',
              fontStyle: 'italic',
            }}
          >
            {date}
          </span>
        </li>
      )
    })}
  </ul>
)

const Archives = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <div className={styles.article}>
    <SEO title="归档" />
    <Title>归档</Title>
    {group.reverse().map(({ fieldValue, totalCount, edges }, i) => (
      <React.Fragment key={i}>
        <h3>
          {fieldValue}
          {` (${totalCount})`}
        </h3>
        <ArchivesLinks posts={edges} />
      </React.Fragment>
    ))}
  </div>
)

export default Archives

export const pageQuery = graphql`
  query ArchivesQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      group(field: fields___date) {
        fieldValue
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
            }
          }
        }
      }
    }
  }
`
