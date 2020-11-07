module.exports = {

  siteMetadata: {
    title: 'Anthony Zheng | Web Developer',
    url: `https://anthonyz.dev`,
    description: `Anthony Zheng is a chemistry major turned web developer who loves to discuss, plan, and implement.`
  },
  pathPrefix: "/react-ajz003",
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-159401887-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 1100,
        // Any additional optional fields
      },
    },
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
        legacy: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/portfolio/`],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`
  ],
}
