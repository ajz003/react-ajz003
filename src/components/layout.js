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
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }
  closeMenu() {
    this.setState({menuOpen: false})
  }
  
  render() {

    var menuOpen = this.state.menuOpen
    return (
      <>
        <Modal menuOpen={menuOpen} toggleMenu={this.toggleMenu} closeMenu={this.closeMenu} />
        <Header menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
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
