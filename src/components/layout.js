import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import Modal from "./modal"
import "./layout.scss"

class Layout extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.openMenu = this.openMenu.bind(this)
  }

  toggleMenu() {
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }
  closeMenu() {
    this.setState({menuOpen: false})
  }
  openMenu() {
    this.setState({menuOpen: true})
  }
  
  render() {

    let menuOpen = this.state.menuOpen

    return (
      <>
        <Modal menuOpen={menuOpen} toggleMenu={this.toggleMenu} closeMenu={this.closeMenu} />
        <Header menuOpen={menuOpen} toggleMenu={this.toggleMenu} openMenu={this.openMenu} closeMenu={this.closeMenu} />
        <div
          className="body-wrapper"
        >
          <main>{this.props.children}</main>
          <Footer />
        </div>
      </>
    )    
  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
