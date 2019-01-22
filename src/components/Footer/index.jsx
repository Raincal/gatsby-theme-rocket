import React from 'react'
import styles from 'styles/footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    © {new Date().getFullYear()} - {'Raincal\'s'} Blog -&nbsp;
    <a
      href="https://github.com/Raincal/gatsby-firekylin"
      target="_blank"
      rel="noopener noreferrer"
    >
      博客源码
    </a>
    <br />
    Powered by&nbsp;
    <a
      href="https://www.gatsbyjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gatsby
    </a>
    &nbsp;&&nbsp;
    <a href="https://graphql.org" target="_blank" rel="noopener noreferrer">
      GraphQL
    </a>
  </footer>
)

export default Footer
