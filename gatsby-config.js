module.exports = {
  siteMetadata: {
    title: `F1`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    menuItems: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Teams",
        link: "/Teams/",
      },
      {
        text: "Drivers",
        link: "/Drivers/",
      },
      {
        text: "Schedule",
        link: "/Schedule/",
      },
      {
        text: "Standings",
        link: "/Standings/",
      },
      {
        text: "Login",
        link: "/Login/",
      },
    ],
    author: `@gatsbyjs`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/f1-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
