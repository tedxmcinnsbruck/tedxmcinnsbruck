import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <span class="tedx">TEDx</span>MCInnsbruck
    </Link>
    <nav>
      <Link to="#tickets">Tickets</Link>
      <Link to="#speakers">Speakers</Link>
      <Link to="#partners">Partners</Link>
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
