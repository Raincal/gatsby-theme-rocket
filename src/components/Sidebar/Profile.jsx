import { navigateTo } from 'gatsby'
import React from 'react'
import styles from 'styles/profile.module.css'
import avatar from '../../images/avatar.png'

const Profile = ({ title }) => (
  <div className={styles.profile}>
    <img
      src={avatar}
      alt='avatar'
      className={styles.avatar}
      onClick={() => navigateTo('/')}
    />
    <span className={styles.title}>{title}</span>
  </div>
)

export default Profile
