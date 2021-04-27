import React from 'react'
import * as styles from 'styles/footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    © 2019 - {'Raincal\'s'} Blog -&nbsp;
    <a
      href="https://github.com/Raincal/gatsby-rocket-blog"
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
    <a href="https://www.yuque.com" target="_blank" rel="noopener noreferrer">
      Yuque
    </a>
  </footer>
)

export default Footer
