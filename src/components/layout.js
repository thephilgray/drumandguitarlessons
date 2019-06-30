/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { Typography, Container } from "@material-ui/core"
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles"
import DrumAndGuitarLogo from "../images/logo.png"
import StyledBackgroundFooter from "../components/StyledBackgroundFooter"

import Header from "./header"
import "typeface-roboto"

export const theme = {
  palette: {
    primary: { main: "#D95141" },
    secondary: { main: "#fff" },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "p",
        body2: "span",
      },
    },
  },
}

let muiTheme = createMuiTheme(theme)
muiTheme = responsiveFontSizes(muiTheme)

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  main: {
    margin: `0 auto`,
    // maxWidth: 960,
    width: `100%`,
  },
  header: {
    width: "100%",
  },
  footer: {
    backgroundImage: `url(${require("../images/stars.png")}),linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0))`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "2vh",
    textAlign: "center",
    padding: "6vw",
    width: "100%",
    bottom: "0",
    margin: 0,
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          copyright
          keywords
        }
      }
    }
  `)
  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <Header
          className={classes.header}
          siteTitle={site.siteMetadata.title}
        />

        <main className={classes.main}>{children}</main>

        <StyledBackgroundFooter className={classes.footer} height="400px">
          <Container maxWidth="lg">
            <img src={DrumAndGuitarLogo} alt="DrumAndGuitarLessons.com" style={{maxWidth:"100%"}} />
            <Typography
              variant="h6"
              align="center"
              style={{ color: "white" }}
              gutterBottom
            >
              © {new Date().getFullYear()} {site.siteMetadata.copyright}
            </Typography>
          </Container>
        </StyledBackgroundFooter>
      </div>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
