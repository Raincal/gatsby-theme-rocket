import Link from 'gatsby-link'
import React from 'react'
import styles from 'styles/buttons.module.css'

const Buttons = ({ data }) => {
  return (
    <ul className={styles.buttons}>
      {data.map((button, i) => (
        <li key={i}>
          <Link to={button.url}>
            <i className={`iconfont icon-${button.icon}`} />
            <span className={styles.title}>{button.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Buttons
