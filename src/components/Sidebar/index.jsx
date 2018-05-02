import classNames from 'classnames/bind'
import React from 'react'
import 'styles/global/iconfont.css'
import styles from 'styles/sidebar.module.css'
import Buttons from './Buttons'
import Profile from './Profile'

let cx = classNames.bind(styles)

const Sidebar = ({ title, navButtons, showMask, onCloseMaskDelay }) => {
  return (
    <nav
      className={cx({
        sidebar: true,
        show: showMask,
      })}
    >
      <Profile title={title} />
      <Buttons onCloseMaskDelay={onCloseMaskDelay} data={navButtons} />
    </nav>
  )
}

export default Sidebar
