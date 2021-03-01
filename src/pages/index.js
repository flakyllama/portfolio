import React from 'react'
import '../styles/index.scss'
import CanadianFlag from "../images/emojis/flag-canadian.svg"

const Landing = () => (
  <html>
    <head>
    <meta charset="UTF-8" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
      <div className="landing-container">
        <div className="landing-hero">
          <p className="landing-hero-title d1 fadeInUp">Fardeen Chowdhury</p>
          <h4 className="landing-hero-subheading fadeInUp">Digital product designer <span className="slash-blend">/</span> Serial reader&nbsp;
            <span className="slash-blend">/</span> Film aficionado <span className="slash-blend">/</span> Tea drinker
            <br />
            Currently designing at VendorPM in Toronto <img className="emoji-flag" src={CanadianFlag} />
          </h4>
          <div className="landing-hero-btn-list fadeInUp">
            <a className="btn-primary" href="about" target="_top">Learn more about me</a>
            <a className="btn-secondary" target="_blank">View resume</a>
          </div>
          <div className="landing-scroll fadeIn">
            <a className="landing-scroll-link" href="#about" title="Scroll to Explore">
              <div className="landing-scroll-wording">Scroll to Explore
                <svg className="landing-scroll-path" viewBox="0 0 182 140">
                  <path className="landing-scroll-path-rectangle stroke" d="M91 86.2V41h90V1H1v40h82"></path>
                  <path className="landing-scroll-path-arrow arrowBounce" d="M82.5 95.3l8.5 9.6 8.5-9.6"></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="landing-project-container">
            <div id="project-a" className="landing-project-card"></div>
          </div>
        </div>
      </div>
    </body>
  </html>
)

export default Landing