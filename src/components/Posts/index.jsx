import React from 'react'
import Post from './Post'

const Posts = ({ posts }) => (
  <>
    {posts.map(({ node }) => (
      <Post key={node.id} post={node} isHome />
    ))}
  </>
)

export default Posts
