import PropTypes from "prop-types"
import React, { useEffect } from "react"

import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'

import { Link } from 'gatsby';

var classNames = require('classnames');



const ModalMenu = ({menuOpen, closeMenu}) => {

  var modalMenuClasses = classNames({
    "message is-large message-menu": true,
    "message-menu--open": menuOpen
  })

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        closeMenu();
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [closeMenu])

  return (

    <article className={modalMenuClasses}>
      <div className="modal-background" onClick={closeMenu}></div>
      <div className="modal-menu-body">
        <div className="message-header">
          <button className="delete" aria-label="delete" onClick={closeMenu}></button>
        </div>
        <div className="message-body">
          <div className="columns has-text-centered">
            <Link title="Home" className="modal-menu-item column" onClick={closeMenu} to="/"

            >Home</Link>

            <Link title="About" className="modal-menu-item column" onClick={closeMenu} to="/about"

            >About</Link>

            <Link title="Portfolio" className="modal-menu-item column" onClick={closeMenu} to="/portfolio"

            >Portfolio</Link>

            <div className="modal-menu-item column">
              <a href="https://github.com/ajz003" rel="noopener noreferrer" target="_blank" title="My GitHub profile"><GoMarkGithub className="social-icon" /></a>
              <a href="https://www.linkedin.com/in/anthony-zheng/" rel="noopener noreferrer" target="_blank" title="My LinkedIn profile"><FaLinkedin className="social-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

ModalMenu.propTypes = {
  siteTitle: PropTypes.string,
}

ModalMenu.defaultProps = {
  siteTitle: ``,
}

export default ModalMenu