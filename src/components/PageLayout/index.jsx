import React from 'react'
import styles from 'styles/posts.module.css'
import Layout from '../Layout'
import Title from '../Posts/Title'
import SEO from '../Seo'

const PageLayout = ({ title, children }) => (
  <Layout>
    <SEO title={title} />
    <article className={styles.article}>
      <Title>{title}</Title>
      <div className={styles.content}>{children}</div>
    </article>
  </Layout>
)

export default PageLayout
