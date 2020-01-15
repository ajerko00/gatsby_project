const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/post.js")
  const driverTemplate = path.resolve("src/templates/post-drivers.js")
  const teamTemplate = path.resolve("src/templates/post-teams.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              posttype
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.posttype === "article") {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
        })
      } else if (node.frontmatter.posttype === "driver") {
        createPage({
          path: node.frontmatter.path,
          component: driverTemplate,
        })
      } else if (node.frontmatter.posttype === "team") {
        createPage({
          path: node.frontmatter.path,
          component: teamTemplate,
        })
      }
    })
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}

/* result.data.allMarkdownRemark.edges.forEach(edge => {
  if (edge.node.frontmatter.posttype === 'project') {
      createPage({
          path: edge.node.frontmatter.path,
          component: projectTemplate,
          context: {}
      });
  }   
  else {
      createPage({
          path: edge.node.frontmatter.path,
          component: postTemplate,
          context: {
          },
      })
  }
})     */
