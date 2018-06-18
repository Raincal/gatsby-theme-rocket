/* eslint-disable */
import React from 'react'
import styles from 'styles/intro.module.css'

const Intro = ({ tag }) => (
  <h1 className={styles.intro}>
    标签 <a href="javascript:void(0)">{tag}</a> 下的文章
  </h1>
)

export default Intro
