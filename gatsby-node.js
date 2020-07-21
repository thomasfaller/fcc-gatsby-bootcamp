const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog.js");
  const pageTemplate = path.resolve("./src/templates/page.js");
  const resBlog = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  const resPage = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  resBlog.data.allContentfulPost.edges.forEach((edge) => {
    const { slug } = edge.node;
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    });
  });
  resPage.data.allContentfulPage.edges.forEach((edge) => {
    const { slug } = edge.node;
    createPage({
      component: pageTemplate,
      path: `/${slug}`,
      context: {
        slug,
      },
    });
  });
};
