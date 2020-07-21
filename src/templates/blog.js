import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url} />;
      },
    },
  };
  return (
    <Layout>
      <h1>{props.data.contentfulPost.title}</h1>
      <span>{props.data.contentfulPost.date}</span>
      {documentToReactComponents(props.data.contentfulPost.body.json, options)}
    </Layout>
  );
};

export default Blog;
