const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/thomas/Dev/personal/fcc-gatsby-bootcamp/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/thomas/Dev/personal/fcc-gatsby-bootcamp/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/thomas/Dev/personal/fcc-gatsby-bootcamp/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/thomas/Dev/personal/fcc-gatsby-bootcamp/src/pages/index.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/thomas/Dev/personal/fcc-gatsby-bootcamp/src/templates/blog.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/thomas/Dev/personal/fcc-gatsby-bootcamp/src/templates/page.js")))
}

