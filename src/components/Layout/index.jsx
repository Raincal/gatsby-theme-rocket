import { graphql, StaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'
import Sidebar from '../Sidebar'
import SidebarMask from '../Sidebar/SidebarMask'

const Layout = ({ children }) => {
  const [showMask, setShowMask] = useState(false)

  useEffect(
    () => {
      window.addEventListener('resize', closeMask)
      return () => {
        window.removeEventListener('resize', closeMask)
      }
    },
    [showMask]
  )

  const closeMask = () => {
    showMask && setShowMask(false)
  }

  const onCloseMask = e => {
    e.preventDefault()
    closeMask()
  }

  const onCloseMaskDelay = () => {
    window.___emitter.on(`onPostLoadPageResources`, () => {
      closeMask()
    })
  }

  const toggle = e => {
    e.preventDefault()
    setShowMask(!showMask)
  }

  return (
    <StaticQuery
      query={layoutQuery}
      render={data => (
        <div>
          <Sidebar
            onCloseMaskDelay={onCloseMaskDelay}
            showMask={showMask}
            {...data.site.siteMetadata}
          />
          <SidebarMask onCloseMask={onCloseMask} showMask={showMask} />
          <Header
            toggle={toggle}
            showMask={showMask}
            title={data.site.siteMetadata.title}
          />
          <Main showMask={showMask}>
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
        navButtons {
          name
          icon
          url
        }
        socialLinks {
          name
          icon
          url
        }
      }
    }
  }
`
