import 'prismjs/themes/prism-tomorrow.css'
import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import SidebarMask from '../components/Sidebar/SidebarMask'

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
    this.setState({
      showMask: false,
    })
  }
  toggle = () => {
    this.setState({
      showMask: !this.state.showMask,
    })
  }
  render() {
    const { data, children } = this.props
    const { showMask } = this.state
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Blog' },
            { name: 'keywords', content: 'Raincal, Blog' },
          ]}
        />
        <Sidebar showMask={showMask} {...data.site.siteMetadata} />
        <SidebarMask showMask={showMask} />
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
      }
    }
  }
`
