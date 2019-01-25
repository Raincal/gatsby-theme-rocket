import classNames from 'classnames/bind'
import { Link } from 'gatsby'
import React from 'react'
import styles from 'styles/header.module.css'

const cx = classNames.bind(styles)

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
    <Link to="/about/">
      <img
        src='https://cdn.yuque.com/yuque/0/2018/png/123526/1525979671576-avatar/32b284df-3354-4e03-ab59-fbb06f71e78e.png?x-oss-process=image/resize,m_fill,w_140,h_140'
        alt="avatar"
        className={styles.about}
      />
    </Link>
  </header>
)

export default Header
