import { Link } from 'gatsby'
import React from 'react'
import styles from 'styles/posts.module.css'
import Title from './Title'

const Post = ({ post, isHome }) => {
  const { frontmatter, excerpt, html, tableOfContents, fields } = post
  return (
    <article className={styles.article}>
      <div className={styles.meta}>
        <div>{frontmatter.date}</div>
      </div>
      <Title>
        {isHome ? (
          <Link to={fields.slug}>{frontmatter.title}</Link>
        ) : (
          <>{frontmatter.title}</>
        )}
      </Title>
      <div className={styles.content}>
        {isHome ? (
          <>
            {excerpt}
            <p className={styles.more}>
              <Link to={fields.slug}>阅读更多 »</Link>
            </p>
          </>
        ) : (
          <>
            {tableOfContents && (
              <div
                className={styles.toc}
                dangerouslySetInnerHTML={{ __html: tableOfContents }}
              />
            )}
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </>
        )}
      </div>
    </article>
  )
}

export default Post
