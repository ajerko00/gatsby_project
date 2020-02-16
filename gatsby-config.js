module.exports = {
  siteMetadata: {
    title: `F1`,
    description: `/`,

    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-flexsearch",
      options: {
        // L
        languages: ["en"],
        type: "MarkdownRemark", // Filter the node types you want to index
        // Fields to index.
        fields: [
          {
            name: "title",
            indexed: true, // If indexed === true, the field will be indexed.
            resolver: "frontmatter.title",
            // Attributes for indexing logic. Check https://github.com/nextapps-de/flexsearch#presets for details.
            attributes: {
              encode: "balance",
              tokenize: "strict",
              threshold: 6,
              depth: 3,
            },
            store: true, // In case you want to make the field available in the search results.
          },
          {
            name: "description",
            indexed: true,
            resolver: "html",
            attributes: {
              encode: "balance",
              tokenize: "strict",
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: "image",
            indexed: false,
            resolver: "internal.content.img",
            attributes: {
              encode: "balance",
              tokenize: "strict",
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: "url",
            indexed: false,
            resolver: "frontmatter.path",
            store: true,
          },
          {
            name: "posttype",
            indexed: false,
            resolver: "frontmatter.posttype",
            store: true,
          },
        ],
      },
    },

    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages/`,
        name: `markdown-pages`,
      },
    },

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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              wrapperStyle:
                " margin-left: 0!important; margin-right: 0!important;",
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/a/f1-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
