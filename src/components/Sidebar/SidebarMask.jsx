import classNames from 'classnames/bind'
import React from 'react'
import styles from 'styles/sidebar-mask.module.css'

let cx = classNames.bind(styles)

const SidebarMask = ({ showMask }) => {
  return (
    <div
      className={cx({
        mask: true,
        show: showMask,
      })}
    />
  )
}

export default SidebarMask
