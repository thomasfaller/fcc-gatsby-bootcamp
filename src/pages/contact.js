import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a
          href={`https://twitter.com/${data.site.siteMetadata.twitter}`}
          target="_blank"
          rel="noreferrer"
        >
          {data.site.siteMetadata.twitter}
        </a>{" "}
        on Twitter!
      </p>
    </Layout>
  );
};

export default ContactPage;
