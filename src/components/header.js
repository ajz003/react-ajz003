import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'

import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'

import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle, menuLinks }) => (
<AppBar position="sticky" color="inherit">

   <Toolbar>
   <AniLink title="Anthony Zheng" className="menu-item name" cover duration={1} direction="left" to="/"
              bg="#663399"
            ><Button>Anthony Zheng</Button></AniLink>
            |
<div className="menu-left">
            <AniLink title="Home" className="menu-item" activeClassName="active" cover duration={1} direction="left" to="/"
              bg="#663399"
            ><Button>Home</Button></AniLink>
            <AniLink title="About" className="menu-item" activeClassName="active" cover duration={1} direction="right" to="/about"
              bg="#663399"
            ><Button>About</Button></AniLink>
            <AniLink title="Portfolio" className="menu-item" activeClassName="active" cover duration={1} direction="right" to="/portfolio"
              bg="#663399"
            ><Button>Portfolio</Button></AniLink>
            <AniLink title="Contact" className="menu-item" activeClassName="active" cover duration={1} direction="right" to="/contact"
              bg="#663399"
            ><Button>Contact</Button></AniLink>
</div>
                  <a href="https://github.com/ajz003" title="My GitHub profile"><GoMarkGithub className="social-icon" /></a>
        <a href="https://www.linkedin.com/in/anthony-zheng/" title="My LinkedIn profile"><FaLinkedin className="social-icon" /></a>  
   </Toolbar>

      



</AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
