import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Typography, Box, Container } from "@material-ui/core"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ContactForm from "../../components/ContactForm"
import StyledBackgroundSectionContact from "../../components/StyledBackgroundSectionContact"

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
      <StyledBackgroundSectionContact>
        <Typography variant="h3" color="secondary" gutterBottom>
          Contact
        </Typography>
      </StyledBackgroundSectionContact>
      <Container maxWidth="lg">
        <Box m={4}>
          <Typography align="center" variant="body1">
              {site.siteMetadata.contact.phone}
          </Typography>

          <Typography align="center" variant="body1">
            <a href={"mailto:" + site.siteMetadata.contact.email}>
              {site.siteMetadata.contact.email}
            </a>
          </Typography>

          <Typography align="center" variant="body1">
            {site.siteMetadata.contact.address.line2}
          </Typography>
          <Typography align="center" variant="body1">
            {site.siteMetadata.contact.address.line3}
          </Typography>
        </Box>

        <Box>
          <ContactForm />
        </Box>
      </Container>
    </Layout>
  )
}

export default Contact
