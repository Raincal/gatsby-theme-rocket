import { navigateTo } from 'gatsby-link'
import React from 'react'
import styles from 'styles/profile.module.css'

const Profile = ({ title }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar} onClick={() => navigateTo('/')} />
      <span className={styles.title}>{title}</span>
    </div>
  )
}

export default Profile
