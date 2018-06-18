import React from 'react'
import styles from 'styles/buttons.module.css'
import Link from './Link'

const SocialButtons = ({ data }) => (
  <ul className={styles.buttons}>
    <li>
      {data.map((button, i) => (
        <Link
          key={i}
          to={button.url}
          className={styles.inline}
          title={button.name}
        >
          <i className={`iconfont icon-${button.icon}`} />
        </Link>
      ))}
    </li>
  </ul>
)

export default SocialButtons
