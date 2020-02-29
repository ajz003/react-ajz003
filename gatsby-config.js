module.exports = {

    siteMetadata: {
      title: 'Anthony Zheng | Web Developer',
      url: `https://anthonyz.dev`,
      description: `Anthony Zheng is a Californian chemistry major turned web developer who is eager to learn and loves to implement.`
    },
    pathPrefix: "/react-ajz003",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anthony Zheng`,
        short_name: `ajz003`,
        start_url: `/`,
        background_color: `#171717`,
        theme_color: `#13aff0`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
