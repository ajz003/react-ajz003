import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { AppBar, Toolbar, Button, Typography, BottomNavigation } from '@material-ui/core'

import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'

import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = ({ siteTitle, menuLinks }) => (
    <footer className="footer">
  <span>© {new Date().getFullYear()} Anthony Zheng</span>
    </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer