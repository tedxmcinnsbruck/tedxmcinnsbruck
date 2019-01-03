import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Tickets = props => (
  <section id="tickets">
    <div className="inner">
      <header className="major">
        <h2>
          <span>
            <a href="/tedxmcinnsbruck-2019.ics" target="_blank">
              15.06.2019
            </a>
          </span>
          &nbsp;//&nbsp;
          <span>
            <Link to="#contact">MCI Innsbruck, Tirol, AT</Link>
          </span>
        </h2>
      </header>
      <ul className="actions">
        <li>
          <Link to="/landing" className="button next">
            Tickets
          </Link>
        </li>
      </ul>
    </div>
  </section>
)

export default Tickets
