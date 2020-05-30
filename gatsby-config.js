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

module.exports = (() => {
  // return fetchMetaData().then(metaData => {
  return {
    siteMetadata: {
      siteUrl: `https://drumandguitarlessons.com`,
      "title": "3 Hour Tour Studios",
      "description": "Professional music lessons in the Huntington Beach/Fountain Valley area, available in-home or in our studio.",
      "keywords": [
        "drum lessons,",
        "drum studio",
        "guitar lessons",
        "bass guitar",
        "keyboard lessons",
        "private mobile lessons",
        "private studio lessons",
        "3 hour tour studios",
        "group lessons",
        "green valley homeowners recreation association",
        "fountain valley",
        "orange county",
        "music school"
      ],
      "copyright": "3 Hour Tour Studios, DrumAndGuitarLessons.com",
      "contact": {
        "email": "management@drumandguitarlessons.com",
        "phone": "(949)-510-DRUM",
        "address": {
          "line2": "P.O. Box 20008",
          "line3": "Fountain Valley, CA 92728"
        }
      },
      "author": "@thephilgray"
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
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `expertise`,
          path: `${__dirname}/src/expertise/`,
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
      `gatsby-transformer-remark`,
      `gatsby-transformer-yaml`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,

      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `3-hour-tour-studios`,
          short_name: `3 Hour Tour Studios`,
          start_url: `/`,
          background_color: `#D95141`,
          theme_color: `#D95141`,
          display: `minimal-ui`,
          icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        },
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      `gatsby-plugin-offline`,
    ],
  }
  // })
})()
