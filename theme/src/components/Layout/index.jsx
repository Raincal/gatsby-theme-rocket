import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Footer from '../Footer'
import Main from '../Main'
import Sidebar from '../Sidebar'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={layoutQuery}
      render={data => (
        <div>
          <Sidebar {...data.site.siteMetadata} />
          <Main>
            {children}
            <Footer />
          </Main>
        </div>
      )}
    />
  )
}

export default Layout

const layoutQuery = graphql`
  query SiteInfoQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
