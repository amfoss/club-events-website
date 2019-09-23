import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import MLHLogo from "../images/local-hack-day.png"

const Header = () => (
  <div id="topbar">
    <div className="row m-0">
      <div className="col-lg-3">
        <img src={MLHLogo} />
      </div>
      <div className="col-lg-9 d-flex justify-content-end align-items-center">
        <div id="menu">
          <a href="/schedule">Schedule</a>
          <a href="/schedule">Schedule</a>
          <a href="/schedule">Schedule</a>
          <a href="/schedule">Schedule</a>
        </div>
      </div>
    </div>
  </div>
);

export default Header