import React from 'react'
import '../styles/global.scss'
import '../styles/novuum.scss'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import InlineLink from '../components/inlinelink.js'
import ArrowRight from '../images/icons/arrow-right.svg'
import ArrowUp from '../images/icons/arrow-up.svg'
import Novuum1 from '../images/projects/novuum/Novuum-1.png'

// Project page

const ProjectPage = () => (
    <html>
        <head>
        <meta charset="UTF-8" />
        </head>
        <body>
            <NavBar />
            <a id="btn-top" className="btn-misc-top" href="#">
                <img className="btn-misc-top-arrow" src={ArrowUp} alt="Go to top" />
            </a> 
            <section className="project-hero">
                    <div className="hero-image project-hero-image fadeInUp" />
                </section>
            <div id="project-container" className="project-container">
                <section className="project-summary">
                    <div className="project-intro">
                        <div className="project-summary">
                            <h1 className="project-label">
                                Novuum
                            </h1>
                            <p className="project-specializations s1">
                                UI/UX Design <span className="dot-colored">•</span> User Research
                            </p>
                            <p className="project-description">
                                Creating a charity can be cumbersome but knowing how to start the process is an even bigger challenge.
                                <br />
                                <br />
                                Novuum was an exploration of <span className="text-highlight">how charities are registered within Canada</span> to uncover and address 
                                systemic inefficiencies. The goal was to critically assess the current experience and conceptualize a more efficient service.
                            </p>
                        </div>
                        <div className="project-overview">
                            <div id="project-role" className="project-overview-item">
                                <p className="project-overview-item-label s1">
                                    Role
                                </p>
                                <p className="project-overview-item-title">
                                    UX Researcher/Product Designer
                                </p>
                            </div>
                            <div id="project-timeline" className="project-overview-item">
                                <p className="project-overview-item-label s1">
                                    Timeline
                                </p>
                                <p className="project-overview-item-title">
                                    Oct 2020 - Feb 2021 (5 months)
                                </p>
                            </div>
                            <div id="project-members" className="project-overview-item">
                                <p className="project-overview-item-label s1">
                                    Team
                                </p>
                                <p className="project-overview-item-title">
                                    Solo Researcher/Designer
                                </p>
                            </div>
                            <div id="project-links" className="project-overview-item">
                                <p className="project-overview-item-label s1">
                                    Links
                                </p>
                                <a className="link-standalone">
                                    <p className="link-standalone-text">
                                        View in ...
                                    </p>
                                    <img className="link-standalone-arrow" src={ArrowRight} alt="right arrow" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="divider-horizontal-lg" />
                <section id="the-problem" className="project-content">
                    <div className="project-section-details">
                        <p className="project-section-label s1">
                            The problem
                        </p>
                        <h3 className="project-section-title">
                            Old Conclusions
                        </h3>
                    </div>
                    <div className="project-section-text">
                        <p className="project-section-text-body">
                            The inspiration for Novuum started a few years ago during my tenure at a university grant committee that distributed funding to 
                            student-run nonprofits on campus. 
                            <br />
                            <br />
                            A common question tended to pop up with every application. It was one that the entire committee, along with most of the 
                            applicants themselves, struggled to answer.
                            <blockquote className="project-section-text-blockquote">
                                "Is the nonprofit a registered charity and if not, how can it register for charitable status?"
                            </blockquote>
                            Since then, numerous conversations with nonprofit founders uncovered that not only was the registration process extremely laborious, 
                            but that it was frustrating and difficult to find all the relevant information to even get started.
                        </p>
                    </div>
                </section>
                <img className="project-image-lg" src={Novuum1} />
                <section id="the-challenge" className="project-content">
                    <div className="project-section-details">
                        <p className="project-section-label s1">
                            The challenge
                        </p>
                        <h3 className="project-section-title">
                            New Beginnings
                        </h3>
                    </div>
                    <div className="project-section-text mgb-80">
                        <p className="project-section-text-body">
                            Revamping the entire registration process for charities would have been an impossible endeavor. As with most projects, the problem 
                            scope had to be small enough to investigate with minimal effort yet provide maximal impact when addressed. 
                        </p>
                    </div>
                    <div className="project-section-details">
                        <p className="project-section-label s1">
                            The process
                        </p>
                        <h3 className="project-section-title">
                            Defining objectives and constraints
                        </h3>
                    </div>
                    <div className="project-section-text">
                        <p className="project-section-text-body">
                            Filler text
                        </p>
                    </div>
                </section>
                <img className="project-image-lg" src={Novuum1} />
                <section id="gathering data" className="project-content">
                    <div className="project-section-details">
                        <p className="project-section-label s1">
                            Gathering data
                        </p>
                        <h3 className="project-section-title">
                            Identifying assumptions
                        </h3>
                    </div>
                    <div className="project-section-text mgb-80">
                        <p className="project-section-text-body">
                            Using a&nbsp; 
                            <InlineLink link="https://en.wikipedia.org/wiki/First_principle" link_text="First Principles" destination="wikipedia.org"/> 
                            &nbsp;approach, I broke down the assumed problem into an overarching null hypothesis.
                            <blockquote className="project-section-text-blockquote">
                                “Prospective founders need to register their charities to conduct critical operations in Canada and can do so without facing any challenges in 
                                the entire registration process from start to finish.”
                            </blockquote>
                            The core statement was then further split into its root assumptions: 
                            <ul>
                                <li>People know the difference between nonprofits and registered charities in Canada.</li>
                                <li>They want to register a charity to receive benefits and distribute tax receipts.</li>
                                <li>They understand the requirements for registering a charity.</li>
                                <li>They can successfully create a registered charity with minimal effort.</li>
                            </ul>
                            <h6 className="project-section-text-subheading">
                                Why use a hypothesis-based approach?
                            </h6>
                            Creating guiding statements provided me with direction for user research and enabled me to build performance indicators for assessing the current
                            system and subsequent changes. Additionally, knowing the assumptions that I was dealing with would allow me to contain potentially risky ideas in different buckets and minimize 
                            bias in my methods. 
                            <br />
                            <br />
                            If I couldn't disprove my hypothesis by testing the root assumptions, I could feel more confident in the core concept.
                        </p>
                    </div>
                </section>
                <img className="project-image-lg" src={Novuum1} />
            </div>
        </body>
    </html>
)

export default ProjectPage