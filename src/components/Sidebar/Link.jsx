import GatsbyLink from 'gatsby-link'
import React from 'react'

const Link = ({ children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other} target="_blank" rel="noopener">
      {children}
    </a>
  )
}

export default Link
