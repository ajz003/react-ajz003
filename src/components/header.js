import PropTypes from "prop-types"
import React from "react"

import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'

import { Link } from 'gatsby'

const Header = (props) => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link title="Anthony Zheng" className="navbar-item name" to="/">Anthony Zheng</Link>
      <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={props.toggleMenu}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>

    </div>
    <div className="navbar-menu">

      <div className="navbar-start">
        <Link title="Home" className="navbar-item" activeClassName="active" to="/">Home</Link>
        <Link title="About" className="navbar-item" to="/about">About</Link>
        <Link title="Portfolio" className="navbar-item" activeClassName="active" to="/portfolio">Portfolio</Link>
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