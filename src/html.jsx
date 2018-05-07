import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.ico" />
          {this.props.headComponents}
          {css}
          <script
            async
            src="https://cdn.jsdelivr.net/gh/Raincal/disqus-php-api@1.1.4/dist/iDisqus.min.js"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/Raincal/disqus-php-api@1.1.4/dist/iDisqus.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/Raincal/gatsby-firekylin@v1.0.0/static/css/dmvendor.css"
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
