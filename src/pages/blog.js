import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import Layout from "../components/layout";

import blogStyles from "./blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            date(formatString: "MMMM Do, YYYY")
            author
            slug
            thumbnail {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h2>Blog</h2>
      <ol className={blogStyles.posts}>
        {data.allContentfulPost.edges.map((edge, i) => (
          <li key={i} className={blogStyles.post}>
            <Link to={`/blog/${edge.node.slug}`}>
              <div style={{ display: "flex" }}>
                <img
                  src={edge.node.thumbnail.file.url}
                  style={{ width: 200 }}
                />
                <div>
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.date}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default BlogPage;
