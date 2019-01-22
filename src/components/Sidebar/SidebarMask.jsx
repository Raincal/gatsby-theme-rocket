import classNames from 'classnames/bind'
import React from 'react'
import styles from 'styles/sidebar-mask.module.css'

const cx = classNames.bind(styles)

const SidebarMask = ({ onCloseMask, showMask }) => (
  <div
    onClick={onCloseMask}
    onTouchStart={onCloseMask}
    className={cx({
      mask: true,
      show: showMask,
    })}
  />
)

export default SidebarMask
