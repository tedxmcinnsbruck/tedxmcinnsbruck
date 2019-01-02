import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <div>
          <h1>
            <span className="tedx">TEDx</span>MCInnsbruck
          </h1>
          <h2>what changes and stays</h2>
        </div>
      </header>
      <div className="content">
        <p>
          16th of June 2019
          <br />
          MCI Innsbruck
        </p>
        <ul className="actions">
          <li>
            <a href="#one" disabled className="button next scrolly">
              Tickets
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
