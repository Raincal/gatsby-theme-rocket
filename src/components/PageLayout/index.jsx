import React from 'react'
import styles from 'styles/posts.module.css'
import Title from '../Posts/Title'
import SEO from '../Seo'

const PageLayout = ({ title, children }) => (
  <>
    <SEO title={title} />
    <article className={styles.article}>
      <Title>{title}</Title>
      <div className={styles.content}>{children}</div>
    </article>
  </>
)

export default PageLayout
