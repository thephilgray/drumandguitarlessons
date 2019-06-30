import React from "react"
import { useStaticQuery, graphql, useState, Link } from "gatsby"
import { Box, Typography, Container, Button } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/StyledBackgroundSection"
import Loader from '../components/Loader'

const useStyles = makeStyles(theme => ({
  tagline: {
    padding: "2rem",
    minHeight: `400px`,
    display: `flex`,
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cta: {
    marginTop: '1rem'
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
    <Container maxWidth="md" className={classes.tagline}>
      <Typography variant="h4" color="secondary" align="center" gutterBottom>
        {tagline}
      </Typography>
      <Link to="/contact/" style={{textDecoration: "none"}}>
      <Button variant="contained" color="primary" size="large" className={classes.cta}>
      <Typography variant="h5">
        Enroll
      </Typography>
      </Button>
      </Link>
    </Container>
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
          <Typography variant="h4" align="center" style={{ padding: "1rem" }}>
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
      <Typography variant="h4">Our Expertise</Typography>
      <Grid container spacing={4} style={{ marginTop: "1rem" }}>
        {services.map(service => (
          <Service service={service} classes={classes} key={service} />
        ))}
      </Grid>
    </Box>
  )
}


const GroupLessons = () => {
  const classes = useStyles()

  return(
    <Box component="section" className={classes.groupLessons}>
      <Typography variant="h5">Now offering group lessons every Monday from 5:30-6:30pm in the Adult Clubhouse at 17250 Los Jardines West, Fountain Valley, Ca.</Typography>

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
      <StyledBackgroundSection>
        <Tagline tagline={site.siteMetadata.description}></Tagline>
      </StyledBackgroundSection>
      <Container maxWidth="lg" style={{ margin: `2rem auto` }}>
      <GroupLessons/>
        <OurServices/>
      </Container>
    </Layout>
  )
}

export default IndexPage
