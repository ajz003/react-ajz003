import PropTypes from "prop-types"
import React from "react"

import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'

import AniLink from "gatsby-plugin-transition-link/AniLink"

var classNames = require('classnames');



const ModalMenu = (props) => {

 var modalMenuClasses = classNames({
  "message is-large message-menu": true,
  "message-menu--open": props.menuOpen
}) 
  
return (

<article className={modalMenuClasses}>
<div className="modal-background"></div>
<div className="modal-menu-body">
    <div className="message-header">
    <button className="delete" aria-label="delete" onClick={props.closeMenu}></button>
    </div>
    <div className="message-body">
  <div className="columns has-text-centered">
      <AniLink title="Home" className="modal-menu-item column" onClick={props.closeMenu} cover duration={1} direction="left" to="/"
        bg="
        url(https://source.unsplash.com/collection/416011)
        center / cover
        "
      >Home</AniLink>
    
      <AniLink title="About" className="modal-menu-item column" onClick={props.closeMenu} cover duration={1} direction="right" to="/about"
        bg="
        url(https://source.unsplash.com/collection/4967134)
        center / cover
        "
      >About</AniLink>
    
      <AniLink title="Portfolio" className="modal-menu-item column" onClick={props.closeMenu} cover duration={1} direction="right" to="/portfolio"
        bg="
        url(https://source.unsplash.com/collection/335434)
        center / cover
        "
      >Portfolio</AniLink>
    
      <div className="modal-menu-item column">
      <a href="https://github.com/ajz003" rel="noopener noreferrer" target="_blank" title="My GitHub profile"><GoMarkGithub className="social-icon" /></a>
    <a href="https://www.linkedin.com/in/anthony-zheng/" rel="noopener noreferrer" target="_blank" title="My LinkedIn profile"><FaLinkedin className="social-icon" /></a>  
      </div>
  </div>
    </div>
</div>
</article>
)}

ModalMenu.propTypes = {
  siteTitle: PropTypes.string,
}

ModalMenu.defaultProps = {
  siteTitle: ``,
}

export default ModalMenu