import React from 'react'
import { Helmet } from 'react-helmet'
import styles from 'styles/posts.module.css'
import config from '../../config'
import Layout from '../Layout'
import Title from '../Posts/Title'

const PageLayout = ({ title, children }) => (
  <Layout>
    <Helmet title={`${title} - ${config.title}`} />
    <article className={styles.article}>
      <Title>{title}</Title>
      <div className={styles.content}>{children}</div>
    </article>
  </Layout>
)

export default PageLayout
