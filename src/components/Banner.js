import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <div>
          <h1>
            <span className="tedx">TEDx</span>MCInnsbruck
          </h1>
          <span className="tedx-note">
            <span className="x">x</span> = independently organized TED event
          </span>
        </div>
      </header>
      <div className="content">
        <h2>
          <span>
            <span className="re">Re</span>Think
          </span>
          <span>what changes and stays</span>
        </h2>
        {/* <p>
          16th of June 2019
          <br />
          MCI Innsbruck
        </p> */}
        <br />
        {/* <ul className="actions">
          <li>
            <a href="#one" disabled className="button next scrolly">
              Tickets
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  </section>
)

export default Banner
