import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <div className="title">
          <h1>
            <span className="re">Re</span>Think
          </h1>
          <span>what changes and stays</span>
        </div>
      </header>
      <div className="content">
      { !!props.subtitle ?
        <h2>{props.subtitle}</h2> :
        <div>
          <h2>
            <span className="tedx">TEDx</span>MCInnsbruck
          </h2>
          <span className="tedx-note">
            <span className="x">x</span> = independently organized TED event
          </span>
        </div>
      }
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
