const fs = require("fs")
const path = require("path")
const yaml = require("js-yaml")

const fetchMetaData = async () => {
  let doc
  try {
    doc = yaml.safeLoad(
      fs.readFileSync(path.resolve("./src/metadata.yaml"), "utf-8")
    )
    return doc
  } catch (err) {
    console.error(err)
  }
}

module.exports = (async () => {
  return fetchMetaData().then(metaData => {
    return {
      siteMetadata: {
        siteUrl: `https://drumandguitarlessons.com`,
        ...metaData,
      },
      plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sitemap`,
        {
          resolve: "gatsby-plugin-google-tagmanager",
          options: {
            id: "GTM-M6RFP2J",

            // Include GTM in development.
            // Defaults to false meaning GTM will only be loaded in production.
            includeInDevelopment: false,

            // datalayer to be set before GTM is loaded
            // should be an object or a function that is executed in the browser
            // Defaults to null
            defaultDataLayer: { platform: "gatsby" },
          },
        },

        {
          resolve: "gatsby-plugin-material-ui",
          // If you want to use styled components you should change the injection order.
          options: {
            stylesProvider: {
              injectFirst: true,
            },
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
        },

        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `gallery`,
            path: `${__dirname}/src/gallery/`,
          },
        },
        {
          resolve: "gatsby-plugin-react-svg",
          options: {
            rule: {
              include: /svgs/,
            },
          },
        },
        `gatsby-transformer-yaml`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,

        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#D95141`,
            theme_color: `#D95141`,
            display: `minimal-ui`,
            icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
          },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
      ],
    }
  })
})()
