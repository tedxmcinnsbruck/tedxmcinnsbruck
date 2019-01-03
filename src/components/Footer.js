import React from 'react'
import { Link } from 'gatsby'

const Footer = props => (
  <footer id="footer">
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
            <a href="#" className="icon alt fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:info@tedxmcinnsbruck.at"
              className="icon alt fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </section>
      <ul className="copyright">
        <li>&copy; TEDxMCInnsbruck 2019</li>
        <li>
          <Link to="/imprint">Imprint</Link>
        </li>
        <li>
          This independent TEDx event is operated under license from{' '}
          <a href="http://www.ted.com/tedx" target="_blank">
            TED
          </a>
          .
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
