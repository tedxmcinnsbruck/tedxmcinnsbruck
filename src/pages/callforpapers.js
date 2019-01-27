import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const Landing = (props) => (
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

        <Banner/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Call for Papers</h2>
                    </header>
                    <p>
                    You have got an idea the world should hear? You are thinking of the future, how we as humans can change it in a positive way and are just waiting for the right stage?<br />
                    We have got you, the TEDxMCInnsbruck event on the 15th of June 2019 can be your stage. If your idea convices us, you will get the chance to give your very own TEDx-Talk in front of an international audience. You are really gonna be part of the TEDx-Community and feel the TEDx atmosphere in the most participating way.<br />
                    On top of that your talk will be published by TED itself along the famous one's of Elon Musk, Tony Robbins &amp; co.</p>
                    
                    <h4>You are interested?</h4>
                    
                    <p>Send us your idea, ideally directly pitching it in a short video (~2-3 mins), to <span><a href="mailto:callforpapers@tedxmcinnsbruck.at?subject=I've got an idea: &body=info: please upload the video to any cloud storage and send us the link, Thanks a lot in advance! :D">callforpapers@tedxmcinnsbruck.at</a></span>. Because the video might be large of size, just send us a link to some cloud storage or hit us up and we are gonna find a solution.</p>

                    <p>
                    To learn more on how to become a TEDx-Speaker, the <span><a href="https://storage.ted.com/tedx/manuals/tedx_speaker_guide.pdf" target="_blank">Official Speaker Guide</a></span> has got you covered.<br />
                    Of course we will provide you with all the information you may possibly need throughout the whole application process, or if you've got any questions hit us up at <span><a href="mailto:info@tedxmcinnsbruck.at">info@tedxmcinnsbruck.at</a></span></p>
                    <p>We are looking forward to hear from you, <i>your TEDXMCInnsbruck Team</i></p>
                </div>
            </section>
        </div>
    </Layout>
)

export default Landing