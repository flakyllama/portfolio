import React from 'react'
import '../styles/index.scss'

const Landing = () => (
  <body>
    <div className="landing__hero">
      <h1 className="landing__hero__title">Fardeen Chowdhury</h1>
      <h6 className="landing__hero__subheading">Digital product designer. Film aficionado. Tea guzzler.
      <br />
      Currently designing at VendorPM in Toronto <span role="img" aria-label="canadian flag">🇨🇦</span></h6>
      <a className="landing__hero__link" href="#" target="_blank">View resume</a>
      <div className="landing__scroll">
        <a className="landing__scroll__link" href="#projects" title="Scroll to Explore">
          <div className="landing__scroll__wording">Scroll to Explore
            <svg className="landing__scroll__path" viewBox="0 0 182 140">
              <path className="landing__scroll__path__rectangle" d="M91 86.2V41h90V1H1v40h82"></path>
              <path className="landing__scroll__path__arrow" d="M82.5 95.3l8.5 9.6 8.5-9.6"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
    <div className="landing__about">
      <img className="landing__about__photo" src="images/profile.png" loading="lazy" alt="headshot" />
      <div className="landing__about__bio">
        <h3 className="landing__about__bio__heading">Hey there! I'm Fardeen <span role="img" aria-label="waving hand">👋</span></h3>
      </div>
    </div>
  </body>
)

export default Landing