import classNames from 'classnames/bind'
import React from 'react'
import styles from 'styles/main.module.css'

let cx = classNames.bind(styles)

const Main = ({ showMask, children }) => (
  <main
    className={cx({
      main: true,
      show: showMask,
    })}
  >
    {children}
  </main>
)
export default Main
