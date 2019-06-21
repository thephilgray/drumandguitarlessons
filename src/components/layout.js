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

import Header from "./header"
import "./layout.css"

let theme = createMuiTheme({
  palette: {
    primary: { main: "#D95141" },
  },
})
theme = responsiveFontSizes(theme)

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  main: {
    padding: `0px 1.0875rem 1.45rem`,
    margin: `0 auto`,
    maxWidth: 960,
    width: `100%`,
  },
  header: {
    width: "100%",
  },
  footer: {
    backgroundImage: `url(${require("../images/stars.png")}),linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0))`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: `0 auto`,
    marginTop: "2rem",
    textAlign: "center",
    padding: "6em",
    width: "100%",
    bottom: "0",
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
        }
      }
    }
  `)
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Header
          className={classes.header}
          siteTitle={site.siteMetadata.title}
        />

        <main className={classes.main}>{children}</main>

        <footer className={classes.footer}>
          <Container maxWidth="lg">
            <img src={DrumAndGuitarLogo} alt="DrumAndGuitarLessons.com"></img>
            <Typography
              variant="h6"
              align="center"
              style={{ color: "white" }}
              gutterBottom
            >
              © {new Date().getFullYear()} {site.siteMetadata.copyright}
            </Typography>
          </Container>
        </footer>
      </div>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
