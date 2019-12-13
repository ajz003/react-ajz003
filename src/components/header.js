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
   <AniLink title="Anthony Zheng" className="menu-item name" fade duration={1}  to="/"
              
            ><Button>Anthony Zheng</Button></AniLink>
            |
<div className="menu-left">
            <AniLink title="Home" className="menu-item" activeClassName="active" fade duration={1}  to="/"
              
            ><Button>Home</Button></AniLink>
            <AniLink title="About" className="menu-item" activeClassName="active" fade duration={1}  to="/about"
              
            ><Button>About</Button></AniLink>
            <AniLink title="Portfolio" className="menu-item" activeClassName="active" fade duration={1}  to="/portfolio"
              
            ><Button>Portfolio</Button></AniLink>
            <AniLink title="Contact" className="menu-item" activeClassName="active" fade duration={1}  to="/contact"
              
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
