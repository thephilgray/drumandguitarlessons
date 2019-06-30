import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Typography, Box, Container } from "@material-ui/core"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import StyledBackgroundSectionContact from "../../../components/StyledBackgroundSectionContact"

const ContactSuccess = () => {
  const { site } = useStaticQuery(graphql`
    query SiteContactSuccess {
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
      <SEO title="Contact Success" />
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
            <Typography variant="h4" align="center" gutterBottom>
            Got it! Talk to you soon.
            </Typography>
        </Box>
      </Container>
    </Layout>
  )
}

export default ContactSuccess
