import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      thumbnail {
        file {
          url
        }
      }
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          opacity: 0.75,
          color: "white",
          width: "100vw",
          height: 300,
          backgroundImage: `url(${props.data.contentfulPost.thumbnail.file.url})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
          position: "absolute",
          left: 0,
        }}
      >
        <h1>{props.data.contentfulPost.title}</h1>
      </div>
      <div style={{ marginTop: 320 }}>
        <p>{`published on ${props.data.contentfulPost.date}`}</p>
        {documentToReactComponents(
          props.data.contentfulPost.body.json,
          options
        )}
      </div>
    </Layout>
  );
};

export default Blog;
