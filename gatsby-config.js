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
      siteMetadata: { ...metaData },
      plugins: [
        `gatsby-plugin-react-helmet`,
        // {
        //   resolve: `gatsby-source-filesystem`,
        //   options: {
        //     name: `images`,
        //     path: `${__dirname}/src/images`,
        //   },
        // },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `gallery`,
            path: `${__dirname}/src/gallery/`,
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
            background_color: `#663399`,
            theme_color: `#663399`,
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
