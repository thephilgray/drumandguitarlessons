import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  tagline: {
    borderLeft: `2rem solid ${theme.palette.primary.main}`,
    paddingLeft: `1rem`,
  },
  services: {
    padding: `2rem 0`,
  },
  service: {
    background: theme.palette.primary.main,
    color: "#fff",
  },
}))

const Tagline = ({ tagline }) => {
  const classes = useStyles()
  return (
    <Box component="div" className={classes.tagline}>
      <Typography variant="h4">{tagline}</Typography>
    </Box>
  )
}

const Service = ({ service, classes }) => (
  <Grid item xs={12} md={6} style={{ height: "100%" }}>
    <Box component="div" className={classes.service}>
      <Grid
        container
        justify="center"
        alignItems="center"
        wrap="wrap"
        style={{ padding: "1rem" }}
      >
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            {service}
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center", padding: "1rem" }}>
          <img
            src={require("../images/icon-" + service + ".svg")}
            alt={service}
            height="100px"
          />
        </Grid>
      </Grid>
    </Box>
  </Grid>
)

const services = [
  "drums",
  "guitar",
  "bass",
  "keyboards",
  "recording",
  "theory",
  "composition",
  "production",
]

const OurServices = () => {
  const classes = useStyles()
  return (
    <Box component="section" className={classes.services}>
      <Typography variant="h4">Our Areas of Expertise</Typography>
      <Grid container spacing={4} style={{ marginTop: "1rem" }}>
        {services.map(service => (
          <Service service={service} classes={classes} key={service} />
        ))}
      </Grid>
    </Box>
  )
}

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    query SiteDescription {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Tagline tagline={site.siteMetadata.description}></Tagline>
      <OurServices></OurServices>
    </Layout>
  )
}

export default IndexPage
