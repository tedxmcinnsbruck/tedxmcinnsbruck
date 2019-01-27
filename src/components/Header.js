import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <span>
        <span className="tedx">TEDx</span>MCInnsbruck
      </span>
      <span className="tedx-note">
        <span className="x">x</span> = independently organized TED event
      </span>
    </Link>
    <nav>
      <Link to="/callforpapers">Call for Papers</Link>
      <Link to="#tickets">Tickets</Link>
      {/* <Link to="#speakers">Speakers</Link>
      <Link to="#partners">Partners</Link> */}
      {/* <Link to="#team">Team</Link> */}
      <Link to="#contact">Contact</Link>
      {/* <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a> */}
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
