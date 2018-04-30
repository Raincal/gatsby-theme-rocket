import React from 'react'
import Link from 'gatsby-link'

import styles from './profile.module.css'

const Profile = ({ title }) => {
  return (
    <div className={styles.profile}>
      <Link to="/" className={styles.avatar} />
      <span className={styles.title}>{title}</span>
    </div>
  )
}

export default Profile
