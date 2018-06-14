import React from 'react'

class Comment extends React.Component {
  componentDidMount() {
    // var disq = new iDisqus('comment', {
    //   forum: 'raincal',
    //   site: 'https://raincal.com',
    //   api: 'https://raincal-blog-disqus.now.sh',
    //   mode: 2,
    //   badge: '博主',
    //   timeout: 3000,
    //   init: true,
    //   url: location.pathname,
    // })
  }
  render() {
    return <div id="comment" />
  }
}
export default Comment
