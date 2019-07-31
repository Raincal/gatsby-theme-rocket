# Gatsby Theme Rocket

[![Netlify Status](https://api.netlify.com/api/v1/badges/22c7923b-babe-4e50-9569-a208a878383b/deploy-status)](https://app.netlify.com/sites/theme-rocket/deploys)

A super fast blog built with Gatsby.

## Installation

Install the `gatsby-theme-rocket` package:

```sh
# with npm:
npm run --save gatsby-theme-rocket

# with yarn:
yarn add gatsby-theme-rocket
```

## Usage

Add the `gatsby-theme-rocket` pacakge in your `gatsby-config.js` file:

```js
// gatsby-config.js
module.exports = {
  plugins: [`gatsby-theme-rocket`]
}
```

You can also pass a `options` object if you want:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-rocket',
      options: {
        siteUrl: 'https://theme-rocket.netlify.com',
        title: 'Gatsby Theme Rocket',
        description: 'A super fast blog',
        author: 'Raincal'
      }
    }
  ]
}
```
