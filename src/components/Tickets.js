import React from 'react'
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
          <a href="https://ti.to/tedxmcinnsbruck/2019" className="button next">
            Tickets
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default Tickets
