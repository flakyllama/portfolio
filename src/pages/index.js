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
          <p className="landing_hero_title d1">Fardeen Chowdhury</p>
          <h6 className="landing_hero_subheading">Digital product designer <span className="slash-blend">/</span> Serial reader&nbsp;
          <span className="slash-blend">/</span> Film aficionado <span className="slash-blend">/</span> Tea drinker.
          <br />
          Currently designing at VendorPM in Toronto <span role="img" aria-label="canadian flag">&#127464;&#127462;</span></h6>
          <div className="landing_hero_btn_list">
            <a className="btn-primary" href="about">Learn more about me</a>
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
      </div>
    </body>
  </html>
)

export default Landing