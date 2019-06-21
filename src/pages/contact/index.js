import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Typography, Box } from "@material-ui/core"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ContactForm from "../../components/ContactForm"

const Contact = () => {
  const { site } = useStaticQuery(graphql`
    query SiteContact {
      site {
        siteMetadata {
          contact {
            email
            phone
            address {
              line2
              line3
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Contact" />

      <Typography variant="h2">Contact</Typography>
      <Typography component="div" align="center">
        <Box m={1}>
          <a href={"tel:+1" + site.siteMetadata.contact.phone}>
            {site.siteMetadata.contact.phone}
          </a>
        </Box>
        <Box m={1}>
          <a href={"mailto:" + site.siteMetadata.contact.email}>
            {site.siteMetadata.contact.email}
          </a>
        </Box>
        <Box m={1}>{site.siteMetadata.contact.address.line2}</Box>
        <Box m={1}>{site.siteMetadata.contact.address.line3}</Box>
      </Typography>

      <Typography variant="h3">Message</Typography>
      <ContactForm />
    </Layout>
  )
}

export default Contact
