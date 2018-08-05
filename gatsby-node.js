const _ = require('lodash')
const path = require('path')
const dayjs = require('dayjs')
const createPaginatedPages = require('gatsby-paginate')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const path = node.frontmatter.path.toLowerCase()
    let slug = `/post/${path}/`
    if (node.frontmatter.type) {
      slug = `/${node.frontmatter.type}/`
    }
    const date = dayjs(node.frontmatter.date).format('YYYY年MM月')
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `date`,
      value: date,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('src/templates/PostTemplate.jsx')
  const tagTemplate = path.resolve('src/templates/TagTemplate.jsx')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            excerpt(pruneLength: 150)
            frontmatter {
              date(formatString: "MM月DD, YYYY")
              title
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: 'src/templates/index.jsx',
      pageLength: 5,
    })

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }, index) => {
      const slug = node.fields.slug
      let prev = index === 0 ? null : posts[index - 1].node
      let next = index === posts.length - 1 ? null : posts[index + 1].node
      prev = prev && {
        slug: prev.fields.slug,
        title: prev.frontmatter.title,
      }
      next = next && {
        slug: next.fields.slug,
        title: next.frontmatter.title,
      }
      createPage({
        path: slug,
        component: blogPostTemplate,
        context: {
          slug,
          prev,
          next,
        },
      })
    })

    let tags = []

    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    tags = _.uniq(tags)

    tags.forEach(tag => {
      createPage({
        path: `/tag/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions, rules, loaders }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/styles'),
      },
    },
  })
}
