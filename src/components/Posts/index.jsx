import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => {
  const Posts = posts.map(({ node }) => (
    <Post key={node.id} post={node} isHome />
  ))

  return <React.Fragment>{Posts}</React.Fragment>
}

export default Posts
