import Link from 'gatsby-link'
import React from 'react'
import Posts from '../components/Posts'
import Pagination from '../components/Posts/Pagination'

const IndexPage = ({ pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  const pageProps = { previousUrl, nextUrl, first, last }
  return (
    <div>
      <Posts posts={group} />
      <Pagination {...pageProps}>
        {({ first, last, previousUrl, nextUrl }) => (
          <div>
            {!first && (
              <Link style={{ float: 'left' }} to={previousUrl}>
                « 上一页
              </Link>
            )}
            {!last && (
              <Link style={{ float: 'right' }} to={nextUrl}>
                下一页 »
              </Link>
            )}
            <div style={{ textAlign: 'center' }}>
              <Link to="/archives">博客归档</Link>
            </div>
          </div>
        )}
      </Pagination>
    </div>
  )
}

export default IndexPage
