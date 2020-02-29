import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle, menuLinks }) => (

    <footer class="footer">
  <div class="content has-text-centered">
  <span>© {new Date().getFullYear()} Anthony Zheng</span>
  </div>
</footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer