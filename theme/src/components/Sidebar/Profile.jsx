import { Link } from 'gatsby'
import React from 'react'
import styles from 'styles/profile.module.css'
import avatar from '../../images/avatar.svg'

const Profile = ({ title }) => (
  <div className={styles.profile}>
    <Link to="/">
      <img
        src={avatar}
        alt="avatar"
        className={styles.avatar}
      />
    </Link>
    
    <span className={styles.title}>{title}</span>
  </div>
)

export default Profile
