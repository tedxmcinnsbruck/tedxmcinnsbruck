import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <ul className="icons">
          <li>
            <a href="#" className="icon alt fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon alt fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon alt fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon alt fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon alt fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="#">info@tedxmcinnsbruck.at</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <span>
              Management Center Innsbruck
              <br />
              Universitätsstraße 7
              <br />
              6020 Innsbruck
              <br />
              Tirol, Austria
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
