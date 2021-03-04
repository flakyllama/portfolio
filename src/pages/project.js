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
                <section className="project-summary">
                    <div className="project-intro">
                        <div className="project-summary">
                            <h1 className="project-title">Novuum</h1>
                            <p className="project-specializations s1">UI/UX Design • User Research</p>
                            <p className="project-description">Creating a charity can be cumbersome but knowing how to start the process is an even bigger challenge.
                             <br />
                             <br />
                             Novuum was an exploration of how charitable organizations are registered within Canada to uncover and address systemic inefficiencies. 
                             The goal was to critically assess the current experience and conceptualize a more efficient service.</p>
                        </div>
                        <div className="project-overview">
                            <div id="project-role" className="project-overview-item">
                                <p className="project-overview-item-title s1">Role</p>
                                <p className="project-overview-item-subtitle">UX Researcher/Product Designer</p>
                            </div>
                            <div id="project-timeline" className="project-overview-item">
                                <p className="project-overview-item-title s1">Timeline</p>
                                <p className="project-overview-item-subtitle">Oct 2020 - Feb 2021 (5 months)</p>
                            </div>
                            <div id="project-members" className="project-overview-item">
                                <p className="project-overview-item-title s1">Team</p>
                                <p className="project-overview-item-subtitle">Solo Researcher/Designer</p>
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
                <div className="divider-horizontal-lg" />
                <section className="project-content">
                    <div className="project-section-details">
                        <p className="project-section-title s1">The problem</p>
                        <h2 className="project-section-subtitle">An Aging System</h2>
                    </div>
                    <div className="project-section-text">
                        <p className="project-section-text-body">The Canadian charitable sector contributes $151 billion to the country’s GDP and employs 1.5 
                            million people. To say that these numbers are high would be an understatement of equally large proportions. 
                            <br />
                            <br />
                            However, non-profit tech has consistently struggled to scale alongside the industry’s growth. Lags in digitization meant that 
                            sector-wide services were becoming increasingly complex and outdated.
                            <br />
                            <br />
                            Basic usability and accessibility within common tools and services were ever-growing concerns. Performance issues slowly introduced 
                            unreliability. Features became unusable without large manuals and specialized training.
                            <br />
                            <br />
                            The system was showing its age and something needed to change.
                        </p>
                    </div>
                </section>
            </div>
        </body>
    </html>
)

export default ProjectPage