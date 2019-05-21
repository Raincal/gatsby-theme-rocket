import { Link } from 'gatsby'
import React from 'react'
import styles from 'styles/profile.module.css'

const Profile = ({ title }) => (
  <div className={styles.profile}>
    <Link to="/">
      <img
        src='https://ae01.alicdn.com/kf/HTB1Vu.RXBSD3KVjSZFq7634bpXaf.png'
        alt="avatar"
        className={styles.avatar}
      />
    </Link>
    
    <span className={styles.title}>{title}</span>
  </div>
)

export default Profile
