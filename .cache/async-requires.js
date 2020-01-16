// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-js": () => import("../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-post-drivers-js": () => import("../src/templates/post-drivers.js" /* webpackChunkName: "component---src-templates-post-drivers-js" */),
  "component---src-templates-post-teams-js": () => import("../src/templates/post-teams.js" /* webpackChunkName: "component---src-templates-post-teams-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-app-js": () => import("../src/pages/app.js" /* webpackChunkName: "component---src-pages-app-js" */),
  "component---src-pages-drivers-js": () => import("../src/pages/Drivers.js" /* webpackChunkName: "component---src-pages-drivers-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("../src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-schedule-js": () => import("../src/pages/Schedule.js" /* webpackChunkName: "component---src-pages-schedule-js" */),
  "component---src-pages-standings-js": () => import("../src/pages/Standings.js" /* webpackChunkName: "component---src-pages-standings-js" */),
  "component---src-pages-teams-js": () => import("../src/pages/Teams.js" /* webpackChunkName: "component---src-pages-teams-js" */),
  "component---src-pages-login-js": () => import("../src/pages/login.js" /* webpackChunkName: "component---src-pages-login-js" */)
}

