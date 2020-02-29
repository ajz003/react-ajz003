import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'

import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = (props) => (



<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
<div class="navbar-brand">
<AniLink title="Anthony Zheng" className="navbar-item name" cover duration={1} direction="left" to="/"
    bg="
    url(https://source.unsplash.com/collection/416011)
    center / cover
    "
  >Anthony Zheng</AniLink>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={props.toggleMenu}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu">

  <div class="navbar-start">

  <AniLink title="Home" className="navbar-item" activeClassName="active" cover duration={1} direction="left" to="/"
    bg="
    url(https://source.unsplash.com/collection/416011)
    center / cover
    "
  >Home</AniLink>

  <AniLink title="About" className="navbar-item" activeClassName="active" cover duration={1} direction="right" to="/about"
    bg="
    url(https://source.unsplash.com/collection/4967134)
    center / cover
    "
  >About</AniLink>

  <AniLink title="Portfolio" className="navbar-item" activeClassName="active" cover duration={1} direction="right" to="/portfolio"
    bg="
    url(https://source.unsplash.com/collection/335434)
    center / cover
    "
  >Portfolio</AniLink>

  <AniLink title="Contact" className="navbar-item" activeClassName="active" cover duration={1} direction="right" to="/contact"
    bg="
    url(https://source.unsplash.com/collection/3570256)
    center / cover
    "
  >Contact</AniLink>
  </div>


  <div class="navbar-end">
  <a className="navbar-item" href="https://github.com/ajz003" title="My GitHub profile"><GoMarkGithub className="social-icon" /></a>
  <a className="navbar-item" href="https://www.linkedin.com/in/anthony-zheng/" title="My LinkedIn profile"><FaLinkedin className="social-icon" /></a>  
  </div>


  </div>
</nav>



)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header