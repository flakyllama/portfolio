import React from 'react'
import '../styles/index.scss'

const Landing = () => (
  <html>
    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
      <div className="landing_container">
        <div className="landing_hero">
          <p className="landing_hero_title">Fardeen Chowdhury</p>
          <h6 className="landing_hero_subheading">Digital product designer. Film aficionado. Tea guzzler.
          <br />
          Currently designing at VendorPM in Toronto <span role="img" aria-label="canadian flag">🇨🇦</span></h6>
          <div className="landing_hero_btn_list">
            <a className="btn-primary" href="#about">Learn more about me</a>
            <a className="btn-secondary" target="_blank">View resume</a>
          </div>
          <div className="landing_scroll">
            <a className="landing_scroll_link" href="#about" title="Scroll to Explore">
              <div className="landing_scroll_wording">Scroll to Explore
                <svg className="landing_scroll_path" viewBox="0 0 182 140">
                  <path className="landing_scroll_path_rectangle stroke" d="M91 86.2V41h90V1H1v40h82"></path>
                  <path className="landing_scroll_path_arrow arrowBounce" d="M82.5 95.3l8.5 9.6 8.5-9.6"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        {/*
        <div className="landing_about" id="about">
          <img className="landing_about_photo" src={Profile} loading="lazy" alt="headshot" />
          <div className="landing_about_bio">
            <h3 className="landing_about_bio_heading">Hey there! I'm Fardeen <span role="img" aria-label="waving hand">👋</span></h3>
            <h2 className="landing_about_bio_subheading">I like to design meaningful solutions to meaningful problems.</h2>
            <p className="landing_about_bio_description">As a product designer, I enjoy working at the intersection of ideation, design and engineering. 
            <br />
            <br />
            I believe that designing for systems holistically, rather than individual services, leads to great outcomes. To achieve that, I relentlessly pursue knowledge 
            from different domains, with the hopes of using all of it together to build the best products.
            <br />
            <br />
            In my free time, I like to play squash, design video games, and read historical and anthropological non-fiction.</p>
          </div>
        </div>
        */}
        </div>
    </body>
  </html>
)

export default Landing