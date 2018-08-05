import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import 'styles/global/oceanic-next.css'
import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'
import Sidebar from '../Sidebar'
import SidebarMask from '../Sidebar/SidebarMask'

class Layout extends React.Component {
  state = {
    showMask: false,
  }
  componentDidMount() {
    window.addEventListener('resize', this.closeMask)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.closeMask)
  }
  closeMask = () => {
    this.state.showMask &&
      this.setState({
        showMask: false,
      })
  }
  onCloseMask = e => {
    e.preventDefault()
    this.closeMask()
  }
  onCloseMaskDelay = () => {
    window.___emitter.on(`onPostLoadPageResources`, () => {
      this.closeMask()
    })
  }
  toggle = e => {
    e.preventDefault()
    this.setState({
      showMask: !this.state.showMask,
    })
  }
  render() {
    const { children } = this.props
    const { showMask } = this.state
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
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
        `}
        render={data => (
          <div>
            <Helmet title={data.site.siteMetadata.title}>
              <meta name="description" content="Blog" />
              <meta name="keywords" content="Raincal, Blog" />
              <html lang="zh-CN" />
            </Helmet>
            <Sidebar
              onCloseMaskDelay={this.onCloseMaskDelay}
              showMask={showMask}
              {...data.site.siteMetadata}
            />
            <SidebarMask onCloseMask={this.onCloseMask} showMask={showMask} />
            <Header
              toggle={this.toggle}
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
}

export default Layout
