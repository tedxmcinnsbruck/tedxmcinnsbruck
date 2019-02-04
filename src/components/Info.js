import React from 'react'
import { Link } from 'gatsby'

const Info = props => (
  <section id="info">
    <div className="inner">
      <blockquote>
        <h3 align="center">
          „The world as we have created it is a process of our thinking. It
          cannot be changed without changing our thinking.” &mdash; Albert
          Einstein
        </h3>
      </blockquote>
      <p>
        Human beings are naturally inclined to stick to their routines. However,
        as pointed out by Albert Einstein, the world will not change without us
        changing our thinking.
        <br />
        Therefore, in order to{' '}
        <i>
          guarantee sustainability in society, economy and the environment{' '}
        </i>{' '}
        we must rethink processes in all areas, whether this is technology,
        education or design. Let’s <b>RETHINK</b> at the TEDxMCInnsbruck on{' '}
        <a href="/tedxmcinnsbruck-2019.ics" target="_blank">
          June 15th, 2019
        </a>
        .
      </p>
    </div>
  </section>
)

export default Info
