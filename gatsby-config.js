module.exports = {
  siteMetadata: {
    title: "thomasfaller.dev",
    author: "Thomas Faller",
    tagline: "Full-stack dev with Linux flair.",
    twitter: "@TomFrontEnd",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
              linkImagesToOriginals: false,
            },
          },
        ],
      },
    },
  ],
};
