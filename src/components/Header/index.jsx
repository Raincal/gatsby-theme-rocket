import classNames from 'classnames/bind'
import Link from 'gatsby-link'
import React from 'react'
import styles from 'styles/header.module.css'

let cx = classNames.bind(styles)

const Header = ({ title, showMask, toggle }) => {
  return (
    <header
      className={cx({
        header: true,
        show: showMask,
      })}
    >
      <div
        className={cx({
          btnBar: true,
          side: showMask,
        })}
        onClick={toggle}
      >
        <i />
      </div>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </header>
  )
}

export default Header
