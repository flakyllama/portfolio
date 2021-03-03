import React from 'react'
import '../styles/global.scss'
import '../styles/project.scss'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import InlineLink from '../components/inlinelink.js'
import ArrowRight from '../images/icons/arrow-right.svg'

const ProjectPage = () => (
    <html>
        <head>
        <meta charset="UTF-8" />
        </head>
        <body>
            <NavBar />
            <div className="project-container">
                <section className="project-hero">
                    <div className="hero-image project-hero-image fadeInUp" />
                </section>
                <section className="project-content">
                    <div className="project-intro">
                        <div className="project-summary">
                            <h1 className="project-title">Novuum</h1>
                            <p className="project-specializations s1">UI/UX Design • User Research</p>
                            <p className="project-description">My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry
                             about you little bastard! Must go faster... go, go, go, go, go! Hey, take a look at the earthlings. Goodbye! Yes, Yes, without the 
                             oops! 
                             <br />
                             <br />
                             Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think.</p>
                        </div>
                        <div className="project-overview">
                            <div id="project-role" className="project-overview-item">
                                <p className="project-overview-item-title s1">Role</p>
                                <p className="project-overview-item-subtitle">Product designer</p>
                            </div>
                            <div id="project-timeline" className="project-overview-item">
                                <p className="project-overview-item-title s1">Timeline</p>
                                <p className="project-overview-item-subtitle">Nov 2020 - Mar 2021 (5 months)</p>
                            </div>
                            <div id="project-members" className="project-overview-item">
                                <p className="project-overview-item-title s1">Team</p>
                                <p className="project-overview-item-subtitle">Solo designer/researcher</p>
                            </div>
                            <div id="project-links" className="project-overview-item">
                                <p className="project-overview-item-title s1">Links</p>
                                <a className="link-standalone">
                                    <p className="link-standalone-text">View in ...</p>
                                    <img className="link-standalone-arrow" src={ArrowRight} alt="right arrow" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider-horizontal-md" />
            </div>
        </body>
    </html>
)

export default ProjectPage