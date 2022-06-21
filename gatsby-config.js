/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Kumarans Model United Nations",
    description:
      "The 10th edition of one of the largest school MUNs in Bangalore - Kumarans Model United Nations 2022",
    author: "Kumarans",
    twitterUsername: "",
    facebookUsername: "KumaransMUN",
    instagramUsername: "kumaransmun",
    linkedinUsername: "",
    image: "/image-2.jpg",
    siteUrl: "https://kmun.in",
    developerName: "",
    developerUrl: "",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://kmun.in",
        sitemap: "https://kmun.in/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
}
