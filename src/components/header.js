import PropTypes from "prop-types"
import React from "react"

import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = (props) => (



<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
<div className="navbar-brand">
<AniLink title="Anthony Zheng" className="navbar-item name" cover duration={1} direction="left" to="/"
    bg="
    url(https://source.unsplash.com/collection/416011)
    center / cover
    "
  >Anthony Zheng</AniLink>

    <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={props.toggleMenu}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </div>
  <div className="navbar-menu">

  <div className="navbar-start">

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

<AniLink title="Blog" className="navbar-item" activeClassName="active" cover duration={1} direction="right" to="/blog/blog-with-gatsby-prismic-part-1"
    bg="
    url(https://source.unsplash.com/collection/335434)
    center / cover
    "
  >Blog</AniLink>

  </div>


  <div className="navbar-end">
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