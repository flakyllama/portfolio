import React from 'react'
import '../styles/index.scss'
import Profile from '../images/profile.png'

const Landing = () => (
  <html>
    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>

      <div className="landing__hero">
        <h1 className="landing__hero__title">Fardeen Chowdhury</h1>
        <h6 className="landing__hero__subheading">Digital product designer. Film aficionado. Tea guzzler.
        <br />
        Currently designing at VendorPM in Toronto <span role="img" aria-label="canadian flag">🇨🇦</span></h6>
        <a className="landing__hero__link" href="#about" target="_blank">View resume</a>
        <div className="landing__scroll">
          <a className="landing__scroll__link" href="#about" title="Scroll to Explore">
            <div className="landing__scroll__wording">Scroll to Explore
              <svg className="landing__scroll__path" viewBox="0 0 182 140">
                <path className="landing__scroll__path__rectangle stroke" d="M91 86.2V41h90V1H1v40h82"></path>
                <path className="landing__scroll__path__arrow arrowBounce" d="M82.5 95.3l8.5 9.6 8.5-9.6"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="landing__about" id="about">
        <img className="landing__about__photo" src={Profile} loading="lazy" alt="headshot" />
        <div className="landing__about__bio">
          <h3 className="landing__about__bio__heading">Hey there! I'm Fardeen <span role="img" aria-label="waving hand">👋</span></h3>
          <h2 className="landing__about__bio__subheading">I like to design meaningful solutions to meaningful problems.</h2>
          <p className="landing__about__bio__description">As a product designer, I enjoy working at the intersection of ideation, design and engineering. 
          <br />
          <br />
          I believe that designing for systems holistically, rather than individual services, leads to great outcomes. To achieve that, I relentlessly pursue knowledge 
          from different domains, with the hopes of using all of it together to build the best products.
          <br />
          <br />
          In my free time, I like to play squash, design video games, and read historical and anthropological non-fiction.</p>
        </div>
      </div>
    </body>
  </html>
)

export default Landing