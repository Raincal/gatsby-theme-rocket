import classNames from 'classnames/bind'
import React from 'react'
import styles from 'styles/main.module.css'

const cx = classNames.bind(styles)

const Main = ({ showMask, children }) => (
  <div
    className={cx({
      main: true,
      show: showMask,
    })}
  >
    {children}
  </div>
)
export default Main
