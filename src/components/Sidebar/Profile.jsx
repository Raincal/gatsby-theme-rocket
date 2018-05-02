import Link from 'gatsby-link'
import React from 'react'
import styles from 'styles/profile.module.css'

const Profile = ({ title }) => {
  return (
    <div className={styles.profile}>
      <Link to="/" className={styles.avatar} />
      <span className={styles.title}>{title}</span>
    </div>
  )
}

export default Profile
