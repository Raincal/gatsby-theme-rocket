import React from 'react'
import Link from 'gatsby-link'

const Pagination = props => {
  return (
    <nav
      style={{
        lineHeight: '20px',
        borderBottom: '1px solid #ddd',
        padding: '20px 0',
        overflow: 'hidden',
      }}
    >
      {props.children(props)}
    </nav>
  )
}

export default Pagination
