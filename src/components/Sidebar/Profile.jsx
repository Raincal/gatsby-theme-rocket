import { Link } from 'gatsby'
import React from 'react'
import styles from 'styles/profile.module.css'

const Profile = ({ title }) => (
  <div className={styles.profile}>
    <Link to="/">
      <img
        src='https://cdn.yuque.com/yuque/0/2018/png/123526/1525979671576-avatar/32b284df-3354-4e03-ab59-fbb06f71e78e.png?x-oss-process=image/resize,m_fill,w_140,h_140'
        alt="avatar"
        className={styles.avatar}
      />
    </Link>
    
    <span className={styles.title}>{title}</span>
  </div>
)

export default Profile
