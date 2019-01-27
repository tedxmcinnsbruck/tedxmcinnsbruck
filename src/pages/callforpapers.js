import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const Landing = props => (
  <Layout>
    <Helmet
      title="TEDxMCInnsbruck"
      meta={[
        {
          name: 'description',
          content: 'TEDxMCInnsbruck, 15.06.2019, MCI Innsbruck, Tirol',
        },
        {
          name: 'keywords',
          content:
            'tedx, innsbruck, mci, ted, technology, education, design, sharing, ideas',
        },
      ]}
    />

    <Banner />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Call for Papers</h2>
          </header>
          <p>
            You have an idea you think the world should hear about?
            <br />
            You are wondering how we as humans can change the future?
            <br />
            You are waiting for the right stage to present your idea?
          </p>

          <p>
            The TEDxMCInnsbruck event on 15 June 2019 can be YOUR stage. If your
            idea convinces us, you will be offered the opportunity to give your
            very own TEDx-talk in front of an international audience allowing
            you to be part of the TEDx-Community and experience the TEDx
            atmosphere first hand. On top of that your talk will be published by
            TED itself along the famous ones of Elon Musk, Tony Robbins &amp;
            Co.
          </p>

          <h4>You are interested?</h4>

          <p>
            Send a short video (2-3 minutes) of you pitching your idea to{' '}
            <span>
              <a href="mailto:callforpapers@tedxmcinnsbruck.at?subject=I've got an idea: &body=info: please upload the video to any cloud storage and send us the link, Thanks a lot in advance! :D">
                callforpapers@tedxmcinnsbruck.at
              </a>
            </span>{' '}
            until 17 February 2019, 23:59. In case the file is too large to be
            sent via e-mail, just upload your video to a cloud storage and
            provide us with a link.
          </p>

          <p>
            To learn more on how to become a TEDx-Speaker please visit the{' '}
            <span>
              <a
                href="https://storage.ted.com/tedx/manuals/tedx_speaker_guide.pdf"
                target="_blank"
              >
                Official Speaker Guide
              </a>
            </span>
            .
            <br />
            Of course, we will happily provide you with any information you may
            possibly need throughout the application process. Just hit us up at{' '}
            <span>
              <a href="mailto:info@tedxmcinnsbruck.at">
                info@tedxmcinnsbruck.at
              </a>
            </span>
            .
          </p>
          <p>
            We are looking forward to receiving your application!
            <br />
            <i>your TEDXMCInnsbruck Team</i>
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Landing
