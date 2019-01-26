import { Link } from 'gatsby'
import React from 'react'
import styles from 'styles/buttons.module.css'

const Buttons = ({ data }) => (
  <ul className={styles.buttons}>
    {data.map((button, i) => (
      <li key={i}>
        <Link to={button.url} aria-label={button.name} activeClassName={styles.active}>
          <i className={`iconfont icon-${button.icon}`} />
          <span className={styles.title}>{button.name}</span>
        </Link>
      </li>
    ))}
  </ul>
)

export default Buttons
