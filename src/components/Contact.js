import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.3201115086594!2d11.395278215646982!3d47.26899661923139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d6bfc185d925b%3A0xcdad4d9263a755a6!2sUniversit%C3%A4tsstra%C3%9Fe+7%2C+6020+Innsbruck!5e0!3m2!1sen!2sat!4v1546513241848"
          width="700"
          title="location-map"
          height="350"
          frameBorder="0"
          style={{ border: 0, width: '100%' }}
        />
      </section>
      <section className="split">
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
