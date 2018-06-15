import { Link } from 'gatsby'
import React, { Fragment } from 'react'
import styles from 'styles/posts.module.css'
import Title from './Title'

// https://github.com/developit/preact/issues/946#issuecomment-353151850
React.Fragment = 'x-fragment'

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
          <Fragment>{frontmatter.title}</Fragment>
        )}
      </Title>
      <div className={styles.content}>
        {isHome ? (
          <Fragment>
            {excerpt}
            <p className={styles.more}>
              <Link to={fields.slug}>阅读更多 »</Link>
            </p>
          </Fragment>
        ) : (
          <Fragment>
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
          </Fragment>
        )}
      </div>
    </article>
  )
}

export default Post
