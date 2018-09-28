import { navigate } from 'gatsby'
import React from 'react'
import styles from 'styles/profile.module.css'

const Profile = ({ title }) => (
  <div className={styles.profile}>
    <div className={styles.avatar} onClick={() => navigate('/')} />
    <span className={styles.title}>{title}</span>
  </div>
)

export default Profile
