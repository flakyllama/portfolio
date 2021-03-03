import React from 'react'
import '../styles/index.scss'
import Footer from '../components/footer.js'
import CanadianFlag from '../images/emojis/flag-canadian.svg'
import ArrowRight from '../images/icons/arrow-right.svg'
import IconDesktop from '../images/icons/desktop.png'

const Landing = () => (
  <html>
    <head>
    <meta charset="UTF-8" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
      <div className="landing-container">
        <section className="landing-hero">
          <p className="landing-hero-title d1 fadeInUp">Fardeen Chowdhury</p>
          <h6 className="landing-hero-subheading fadeInUp">Digital product designer <span className="slash-blend">/</span> Serial reader&nbsp;
            <span className="slash-blend">/</span> Film aficionado <span className="slash-blend">/</span> Tea drinker
            <br />
            Currently designing at VendorPM in Toronto <img className="emoji-flag" src={CanadianFlag} />
          </h6>
          <div className="landing-hero-btn-list fadeInUp">
            <a className="btn-primary" href="about" target="_top">Learn more about me</a>
            <a className="btn-secondary" target="_blank">View resume</a>
          </div>
          <div className="landing-scroll fadeIn">
            <a className="landing-scroll-link" href="#projects" title="Scroll to Explore">
              <div className="landing-scroll-wording">Scroll to Explore
                <svg className="landing-scroll-path" viewBox="0 0 182 140">
                  <path className="landing-scroll-path-rectangle stroke" d="M91 86.2V41h90V1H1v40h82"></path>
                  <path className="landing-scroll-path-arrow arrowBounce" d="M82.5 95.3l8.5 9.6 8.5-9.6"></path>
                </svg>
              </div>
            </a>
          </div>
        </section>
        <section id="projects" className="landing-project-container">
            <a id="project-a" className="landing-project-card" href="project">
              <div className="landing-project-description">
                <img className="landing-project-icon-device" src={IconDesktop} />
                <h1 className="landing-project-title">Novuum</h1>
                <p className="landing-project-body">Simplify the incorporation process for charities/non-profits in North America.</p>
                <a className="landing-project-link">
                  <p className="landing-project-link-text">Learn more</p>
                  <img className="landing-project-link-arrow" src={ArrowRight} alt="right arrow" />
                </a>
              </div>
            </a>
        </section>
        <section className="landing-contact-container">
          <p className="landing-contact-title d3 fadeInUp">Get in touch</p>
          <p className="landing-contact-subheading">Feel free to reach out for collaborations or a quick chat - my inbox is always open. While 
          I may not be an expert email juggler, I'll try my best to get back to you!</p>
          <a className="btn-secondary" href="mailto:fardeen.h.chowdhury@gmail.com" target="_blank">Say Hello</a>
        </section>
        <Footer />
      </div>
    </body>
  </html>
)

export default Landing