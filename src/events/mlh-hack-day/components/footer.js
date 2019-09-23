import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"



const Footer = () => (
  <div id="footer">
    <div className="row m-0">
      <div className="col-md-4">

      </div>
      <div className="col-12 col-md-4">
        &copy; Team amFOSS 2019.
      </div>

      <div className="col-md-4">
        <div id="footer-menu">
          <a href="/schedule">Privacy</a>
          <a href="/schedule">Feedback</a>
          <a href="/schedule">Code of conduct</a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer

