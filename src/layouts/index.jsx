import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import './index.css'
import Profile from '../components/Profile'
import Buttons from '../components/Buttons'

import 'prismjs/themes/prism.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Blog' },
        { name: 'keywords', content: 'Raincal, Blog' },
      ]}
    />
    <div className="container">
      <div className="sidebar-container">
        <div className="sidebar">
          <Profile title={data.site.siteMetadata.title} />
          <Buttons data={data.site.siteMetadata.navButtons} />
        </div>
      </div>
      <div className="main-container">{children()}</div>
    </div>
  </div>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        navButtons {
          name
          icon
          url
        }
      }
    }
  }
`
