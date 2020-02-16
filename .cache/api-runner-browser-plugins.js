module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-flexsearch/gatsby-browser.js'),
      options: {"plugins":[],"languages":["en"],"type":"MarkdownRemark","fields":[{"name":"title","indexed":true,"resolver":"frontmatter.title","attributes":{"encode":"balance","tokenize":"strict","threshold":6,"depth":3},"store":true},{"name":"description","indexed":true,"resolver":"html","attributes":{"encode":"balance","tokenize":"strict","threshold":6,"depth":3},"store":true},{"name":"image","indexed":false,"resolver":"internal.content.img","attributes":{"encode":"balance","tokenize":"strict","threshold":6,"depth":3},"store":true},{"name":"url","indexed":false,"resolver":"frontmatter.path","store":true},{"name":"posttype","indexed":false,"resolver":"frontmatter.posttype","store":true}]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"wrapperStyle":" margin-left: 0!important; margin-right: 0!important;"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/a/f1-logo.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
