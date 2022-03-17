import React from 'react'
import '../styles/index.scss'
import ScrollTop from '../components/btntop.js'
import Footer from '../components/footer.js'
import CanadianFlag from '../images/emojis/flag-canadian.svg'
import SobolLogo from '../images/sobol-logo.svg'
import ArrowRight from '../images/icons/arrow-right.svg'
import IconDesktop from '../images/icons/desktop.png'

const Landing = () => (
  <>
    <ScrollTop />
    <div className="landing-container">
      <section className="landing-hero fadeInUp">
        <h4 className="landing-hero-title">Fardeen Chowdhury</h4>
        <div className="landing-hero-subheading">
          <h2 className="landing-hero-description">
            I'm a digital product designer from Toronto{' '}
            <img className="emoji-flag" src={CanadianFlag} />
          </h2>
        </div>
        <div className="landing-hero-current-pos">
          <div className="gradient-wrapper">
            <div className="landing-hero-current-pos-inner">
              <div className="img-wrapper">
                <img className="company-avatar" src={SobolLogo} />
              </div>
              <div className="pos-details">
                <span className="s1">Currently designing at Sobol 
                  <span className="muted">&nbsp;(Consensys)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className="landing-hero-btn-list fadeInUp">
          <a className="btn-primary" href="about" target="_top">
            Learn more about me
          </a>
          <a className="btn-secondary" target="_blank">
            View resume
          </a>
        </div>
        */}
        <div className="landing-scroll">
          <a
            className="landing-scroll-link"
            href="#projects"
            title="Scroll to Explore"
          >
            <div className="landing-scroll-wording">
              Scroll to Explore
              <svg className="landing-scroll-path" viewBox="0 0 182 140">
                <path
                  className="landing-scroll-path-rectangle stroke"
                  d="M91 86.2V41h90V1H1v40h82"
                ></path>
                <path
                  className="landing-scroll-path-arrow arrowBounce"
                  d="M82.5 95.3l8.5 9.6 8.5-9.6"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </section>
      <section id="projects" className="landing-project-container">
        <a id="project-a" className="landing-project-card" href="novuum">
          <div className="landing-project-description">
            <img className="landing-project-icon-device" src={IconDesktop} />
            <h1 className="landing-project-title">Novuum</h1>
            <p className="landing-project-body">
              Exploring how Canadians can register charities more efficiently.
            </p>
            <a className="landing-project-link">
              <p className="landing-project-link_text">Learn more</p>
              <img
                className="landing-project-link-arrow"
                src={ArrowRight}
                alt="right arrow"
              />
            </a>
          </div>
        </a>
      </section>
      <section className="landing-contact-container">
        <p className="landing-contact-title d3 fadeInUp">Get in touch</p>
        <p className="landing-contact-subheading">
          Feel free to reach out for collaborations or a quick chat - my inbox
          is always open. While I may not be an expert email juggler, I'll try
          my best to get back to you!
        </p>
        <a
          className="btn-secondary"
          href="mailto:fardeen.h.chowdhury@gmail.com"
          target="_blank"
        >
          Say hello
        </a>
      </section>
    </div>
    <Footer />
  </>
)

export default Landing
