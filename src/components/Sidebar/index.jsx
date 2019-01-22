import classNames from 'classnames/bind'
import React from 'react'
import 'styles/global/iconfont.css'
import styles from 'styles/sidebar.module.css'
import Buttons from './Buttons'
import Profile from './Profile'
import SocialButtons from './SocialButtons'

const cx = classNames.bind(styles)

const Sidebar = ({
  title,
  navButtons,
  socialLinks,
  showMask,
  onCloseMaskDelay,
}) => (
  <nav
    className={cx({
      sidebar: true,
      show: showMask,
    })}
  >
    <Profile title={title} />
    <Buttons onCloseMaskDelay={onCloseMaskDelay} data={navButtons} />
    <SocialButtons data={socialLinks} />
  </nav>
)

export default Sidebar
