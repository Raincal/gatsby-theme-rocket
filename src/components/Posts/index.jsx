import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => {
  const Posts = posts
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <Post key={edge.node.id} post={edge.node} isHome />)

  return <React.Fragment>{Posts}</React.Fragment>
}

export default Posts
