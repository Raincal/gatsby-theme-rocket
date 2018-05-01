import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'
import React from 'react'
import styles from './tag.module.css'

const Tag = ({ value, count }) => (
  <li key={value} className={styles.tag}>
    <Link to={`/tag/${kebabCase(value)}/`}>
      {value}
      {count && `(${count})`}
    </Link>
  </li>
)

export default Tag
