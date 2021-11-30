import PropTypes from "prop-types"
import React from "react"

import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'

import { Link } from 'gatsby';

import {
  LINKEDIN_URL,
  GITHUB_URL,
} from '../utils/constants'

var classNames = require('classnames');

const ModalMenu = ({menuOpen, closeMenu}) => {

  var modalMenuClasses = classNames({
    "message is-large message-menu": true,
    "message-menu--open": menuOpen
  })

  function handleOnKeyDown(e) {
    if (e.keyCode === 27){
      closeMenu();
    }
  }

  return (

    <article className={modalMenuClasses}>
      <div className="modal-background" role="button" aria-hidden="true" aria-labelledby="close-menu-1" onKeyDown={(e) => handleOnKeyDown(e)} onClick={closeMenu}></div>
      <div className="modal-menu-body"> 
        <div className="message-header">
          <button className="delete" id="close-menu-1" aria-label="Close" onKeyDown={(e) => handleOnKeyDown(e)} onClick={closeMenu}></button>
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
              <a href={GITHUB_URL} aria-label="My GitHub Profile" rel="noopener noreferrer" target="_blank" title="My GitHub profile"><GoMarkGithub className="social-icon" /></a>
              <a href={LINKEDIN_URL} aria-label="My LinkedIn Profile" rel="noopener noreferrer" target="_blank" title="My LinkedIn profile"><FaLinkedin className="social-icon" /></a>
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