import React from 'react'
import styles from 'styles/title.module.css'

const Title = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>
}

export default Title
