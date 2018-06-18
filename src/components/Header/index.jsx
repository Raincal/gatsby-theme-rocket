import classNames from 'classnames/bind'
import { Link, navigateTo } from 'gatsby'
import React from 'react'
import styles from 'styles/header.module.css'
import avatar from '../../images/avatar.png'

let cx = classNames.bind(styles)

const Header = ({ title, showMask, toggle }) => (
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
      onTouchEnd={toggle}
    >
      <i />
    </div>
    <h1>
      <Link to="/">{title}</Link>
    </h1>
    <img
      src={avatar}
      alt="avatar"
      className={styles.about}
      onClick={() => navigateTo('/about/')}
    />
  </header>
)

export default Header
