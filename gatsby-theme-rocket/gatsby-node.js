const _ = require('lodash')
const path = require('path')
const dayjs = require('dayjs')
const createPaginatedPages = require('gatsby-paginate')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    let slug = node.frontmatter.slug.toString().toLowerCase()
    slug = `/post/${slug}/`
    if (node.frontmatter.type) {
      slug = `/${node.frontmatter.type}/`
    }
    const date = dayjs(node.frontmatter.date).format('YYYY年MM月')
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
    createNodeField({
      node,
      name: 'date',
      value: date,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve('./src/templates/PostTemplate.jsx')
  const tagTemplate = require.resolve('./src/templates/TagTemplate.jsx')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
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
      pageTemplate: require.resolve('./src/templates/index.jsx'),
      pageLength: 5,
    })

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }, index) => {
      const slug = node.fields.slug
      let prev = index === posts.length - 1 ? null : posts[index + 1].node
      let next = index === 0 ? null : posts[index - 1].node
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

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        styles: path.join(__dirname, 'src', 'styles'),
      },
    },
  })
}
