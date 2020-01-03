const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("C:\\Users\\Antonio\\gatsby-project\\src\\templates\\post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\Antonio\\gatsby-project\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Antonio\\gatsby-project\\src\\pages\\404.js"))),
  "component---src-pages-drivers-js": hot(preferDefault(require("C:\\Users\\Antonio\\gatsby-project\\src\\pages\\Drivers.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Antonio\\gatsby-project\\src\\pages\\index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("C:\\Users\\Antonio\\gatsby-project\\src\\pages\\Login.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\Users\\Antonio\\gatsby-project\\src\\pages\\page-2.js"))),
  "component---src-pages-schedule-js": hot(preferDefault(require("C:\\Users\\Antonio\\gatsby-project\\src\\pages\\Schedule.js"))),
  "component---src-pages-standings-js": hot(preferDefault(require("C:\\Users\\Antonio\\gatsby-project\\src\\pages\\Standings.js"))),
  "component---src-pages-teams-js": hot(preferDefault(require("C:\\Users\\Antonio\\gatsby-project\\src\\pages\\Teams.js")))
}

