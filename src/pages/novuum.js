import React from 'react'
import '../styles/global.scss'
import '../styles/novuum.scss'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import InlineLink from '../components/inlinelink.js'
import ArrowRight from '../images/icons/arrow-right.svg'
import Novuum1 from '../images/projects/novuum/Novuum-1.png'

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
                <section id="the-problem" className="project-content">
                    <div className="project-section-details">
                        <p className="project-section-title s1">The problem</p>
                        <h3 className="project-section-subtitle">Old Conclusions</h3>
                    </div>
                    <div id="par1" className="project-section-text">
                        <p className="project-section-text-body">The inspiration for Novuum started a couple of years ago during my tenure at a grant committee at 
                            my university. The committee was tasked with distributing funding to student-run non-profits on campus. 
                            <br />
                            <br />
                            A common question tended to pop up with every application - is the non-profit a registered charity and if not, how can it become
                            one? The committee, along with most of the non-profits, struggled to answer the question. We didn’t even know where to start looking 
                            for the required information to initiate the process.
                            <br />
                            <br />
                            Multiple conversations with non-profit founders since then uncovered that not only was the registration process extremely laborious, 
                            but that it was frustrating and difficult to find all relevant information to even get started.
                        </p>
                    </div>
                </section>
                <img className="project-image-lg" src={Novuum1} />
                <section id="the-challenge" className="project-content">
                    <div className="project-section-details">
                        <p className="project-section-title s1">The challenge</p>
                        <h3 className="project-section-subtitle">New Beginnings</h3>
                    </div>
                    <div id="par2" className="project-section-text mgb-80">
                        <p className="project-section-text-body">Revamping the entire registration process for charities would have been an impossible endeavor. 
                            As with most projects, the problem scope had to be small enough to investigate with minimal effort yet provide maximal impact when 
                            addressed. 
                        </p>
                    </div>
                    <div className="project-section-details">
                        <h3 className="project-section-subtitle">Filler Text</h3>
                    </div>
                    <div id="par3" className="project-section-text">
                        <p className="project-section-text-body">Filler text
                        </p>
                    </div>
                </section>
                    <section id="defining-research" className="project-content">
                    <div className="project-section-details">
                        <p className="project-section-title s1">Defining research direction</p>
                        <h3 className="project-section-subtitle">Understanding my assumptions</h3>
                    </div>
                    <div id="par4" className="project-section-text mgb-80">
                        <p className="project-section-text-body">Using a First Principles approach, I broke down the assumed problem into an overarching hypothesis.
                            <br />
                            <br />
                            <blockquote className="project-section-text-blockquote">“Prospective charity founders need to register their organizations to conduct 
                            operations in Canada and know how to do so”.</blockquote>
                            <br />
                            The core statement was then further split into its root assumptions: 
                            <ol>
                                <li>People want to create and register a charity in Canada.</li>
                                <li>They know the differences between a non-profit and a registered charity.</li>
                                <li>They need to register to receive certain benefits and distribute tax receipts.</li>
                                <li>They understand the requirements for registration.</li>
                            </ol>
                        </p>
                    </div>
                </section>
            </div>
        </body>
    </html>
)

export default ProjectPage