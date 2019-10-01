/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {
            frontmatter: { draft: { ne: true } }
            fileAbsolutePath: { regex: "/expertise/" }
          }
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
              }
              html
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const expertisePageTemplate = path.resolve(`src/components/ExpertisePage.js`)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      frontmatter: { slug, title },
      html,
    } = node

    createPage({
      path: slug,
      component: expertisePageTemplate,
      context: {
        slug,
        title,
        html,
      },
    })
  })
}
