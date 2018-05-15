import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import SidebarMask from '../components/Sidebar/SidebarMask'
import '../styles/global/oceanic-next.css'

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
    const { data, children } = this.props
    const { showMask } = this.state
    return (
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
        <Main showMask={showMask}>{children()}</Main>
      </div>
    )
  }
}

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
        socialLinks {
          name
          icon
          url
        }
      }
    }
  }
`
