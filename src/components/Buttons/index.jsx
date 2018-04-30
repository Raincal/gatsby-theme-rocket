import React from 'react'
import Link from 'gatsby-link'

import styles from './buttons.module.css'

const Buttons = ({ data }) => {
  return (
    <ul className={styles.buttons}>
      {data.map((button, i) => (
        <li key={i}>
          <Link to={button.url}>
            <i className={`iconfont icon-${button.icon}`} />
            <span>{button.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Buttons
