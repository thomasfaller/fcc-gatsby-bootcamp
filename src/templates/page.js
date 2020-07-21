import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      body {
        body
      }
    }
  }
`;

const Page = (props) => (
  <Layout>
    <h1>{props.data.contentfulPage.title}</h1>
    <p>{props.data.contentfulPage.body.body}</p>
  </Layout>
);

export default Page;
