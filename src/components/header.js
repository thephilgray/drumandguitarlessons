import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "../images/logo-red.svg"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import HomeIcon from "@material-ui/icons/HomeTwoTone"
import ContactIcon from "@material-ui/icons/MessageTwoTone"
import GalleryIcon from "@material-ui/icons/PhotoTwoTone"
import AboutIcon from "@material-ui/icons/InfoTwoTone"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: `1.45rem`,
    width: "100%",
    // display: "flex",
  },
  navDrawer: {
    width: "250px",
  },
  menuIcon: {
    marginLeft: "auto",
    // alignSelf: "flex-start",
    position: "absolute",
    top: "1rem",
    right: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
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
      href: "/about",
      icon: () => <AboutIcon color="primary" />,
    },
    {
      title: "Gallery",
      href: "/gallery",
      icon: () => <GalleryIcon color="primary" />,
    },
    {
      title: "Contact",
      href: "/contact",
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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0, textAlign: "center" }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img src={Logo} style={{ width: "100%" }} alt={siteTitle} />
          </Link>
        </h1>
      </div>
      <IconButton
        aria-label="Toggle Navigation"
        onClick={toggleDrawer}
        className={classes.menuIcon}
      >
        <MenuIcon color="primary" style={{ fontSize: "35px" }} />
      </IconButton>
      {navDrawer}
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
