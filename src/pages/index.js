import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Typography, Container, Button } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const useStyles = makeStyles(theme => ({
  tagline: {
    padding: "2rem",
    minHeight: `400px`,
    display: `flex`,
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    zIndex: 100,
  },
  cta: {
    marginTop: "1rem",
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
      <Link to="/contact/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.cta}
        >
          <Typography variant="h5">Enroll</Typography>
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

  return (
    <Box component="section" className={classes.groupLessons}>
      <Typography variant="h5">
        Now offering group lessons every Monday from 5:30-6:30pm in the Adult
        Clubhouse at 17250 Los Jardines West, Fountain Valley, Ca.
      </Typography>
    </Box>
  )
}

const StyledHero = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const StyledVideoOuter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 1;
`

const SyledVideoInner = styled.div`
  position: relative;
  height: 100%;

  &:before {
    /* background-color: #d95141; */
    background-color: rgba(255, 0, 0, 0.3);
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    /* mix-blend-mode: darken; */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  &:after {
    /* background-color: #192550; */
    background-color: rgba(0, 0, 0, 0.5);
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    /* mix-blend-mode: lighten; */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
`

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
      <StyledHero>
        <Tagline tagline={site.siteMetadata.description}></Tagline>
        <StyledVideoOuter>
          <SyledVideoInner>
            <StyledVideo autoPlay muted loop playsInline>
              <source
                src={require("../video/drums-and-guitar.mp4")}
                type="video/mp4"
              ></source>
              <p>
                Your browser doesn't support HTML5 video. Here is a{" "}
                <a href="https://drumandguitarlessons.s3-us-west-1.amazonaws.com/drums-and-guitar-lq.mp4">
                  link to the video
                </a>{" "}
                instead.
              </p>
            </StyledVideo>
          </SyledVideoInner>
        </StyledVideoOuter>
      </StyledHero>
      <Container maxWidth="lg" style={{ margin: `2rem auto` }}>
        <GroupLessons />
        <OurServices />
      </Container>
    </Layout>
  )
}

export default IndexPage
