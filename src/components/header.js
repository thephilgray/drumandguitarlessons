import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Drawer from "@material-ui/core/Drawer"
import Container from "@material-ui/core/Container"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import HomeIcon from "@material-ui/icons/HomeTwoTone"
import ContactIcon from "@material-ui/icons/MessageTwoTone"
import GalleryIcon from "@material-ui/icons/PhotoTwoTone"
import AboutIcon from "@material-ui/icons/InfoTwoTone"
import { makeStyles } from "@material-ui/core/styles"
import Logo from "../images/logo-red.svg"
import { Box } from "@material-ui/core"

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    width: 100%;
  }
  li {
    width: 100%;
    text-align: center;
  }
  li a {
    width: 100%;
    text-decoration: none;
    color: #d95141;
    &[aria-current] div {
      border-bottom: 1rem solid #d95141;
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  navDrawer: {
    width: "300px",
  },
  desktopNav: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  menuIcon: {
    display: "block",
    marginLeft: "auto",
    position: "absolute",
    top: "1vh",
    right: "1vw",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logoContainer: {
    padding: `1.45rem 1.0875rem`,
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
      padding: `1.45rem 1.0875rem`,
      transform: `rotate(-3deg)`,
    },
  },
  logoImage: {
    margin: 0,
    [theme.breakpoints.up("md")]: {
      width: '400px'
    }
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  const [state, setState] = useState({ open: false })
  const toggleDrawer = () => setState({ ...state, open: !state.open })

  /** TODO: add ICON
   * map through pages
   *
   */

  const pages = [
    { title: "Home", href: "/", icon: () => <HomeIcon color="primary" /> },
    {
      title: "About",
      href: "/about/",
      icon: () => <AboutIcon color="primary" />,
    },
    {
      title: "Gallery",
      href: "/gallery/",
      icon: () => <GalleryIcon color="primary" />,
    },
    {
      title: "Contact",
      href: "/contact/",
      partiallyActive: true, // match subpages
      icon: () => <ContactIcon color="primary" />,
    },
  ]

  const navDrawer = (
    <Drawer anchor="right" open={state.open} onClose={toggleDrawer}>
      <nav role="presentation" className={classes.navDrawer}>
        <List>
          {pages.map(page => (
            <ListItem
              button
              onClick={() => navigate(page.href)}
              key={page.title}
            >
              {page.icon && <ListItemIcon>{page.icon()}</ListItemIcon>}
              <ListItemText primary={page.title} />
            </ListItem>
          ))}
        </List>
      </nav>
    </Drawer>
  )

  return (
    <header className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Container maxWidth="sm" className={classes.logoContainer}>
            <h1 style={{ textAlign: "center", margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <img
                  src={Logo}
                  width="250"
                  className={classes.logoImage}
                  alt={siteTitle}
                />
              </Link>
            </h1>
          </Container>
          <StyledNav className={classes.desktopNav}>
            <ul>
              {pages.map(page => (
                <li key={page.title}>
                  <Link to={page.href} partiallyActive={page.partiallyActive}>
                    <Box component="div" m={3}>
                      <Typography variant="h5">{page.title}</Typography>
                    </Box>
                  </Link>
                </li>
              ))}
            </ul>
          </StyledNav>
          <IconButton
            aria-label="Toggle Navigation"
            onClick={toggleDrawer}
            className={classes.menuIcon}
          >
            <MenuIcon color="primary" style={{ fontSize: "35px" }} />
          </IconButton>
          {navDrawer}
        </Toolbar>
      </AppBar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
