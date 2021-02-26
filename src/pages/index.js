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
          <p className="landing_hero_title d1 fadeInUp">Fardeen Chowdhury</p>
          <h4 className="landing_hero_subheading fadeInUp">Digital product designer <span className="slash-blend">/</span> Serial reader&nbsp;
          <span className="slash-blend">/</span> Film aficionado <span className="slash-blend">/</span> Tea drinker.
          <br />
          Currently designing at VendorPM in Toronto <span role="img" aria-label="canadian flag">&#x1f1e8;&#x1f1e6;</span></h4>
          <div className="landing_hero_btn_list fadeInUp">
            <a className="btn-primary" href="about">Learn more about me</a>
            <a className="btn-secondary" target="_blank">View resume</a>
          </div>
          <div className="landing_scroll fadeIn">
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