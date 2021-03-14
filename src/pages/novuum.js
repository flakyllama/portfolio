import React, { useEffect, useRef, useState } from 'react'
import '../styles/global.scss'
import '../styles/novuum.scss'
import NavBar from '../components/navbar.js'
import ScrollTop from '../components/btntop.js'
import Footer from '../components/footer.js'
import InlineLink from '../components/inlinelink.js'
import ArrowRight from '../images/icons/arrow-right.svg'
import Novuum1 from '../images/projects/novuum/novuum-1.png'

// Elements
//------------------------------------------------------------------------------------------------------------------------

const ElementsImpact = () => {
  return (
    <div className="elements-wrapper">
      <svg id="elements-impact" className="elements" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="elements-impact-bg" cx="90" cy="90" r="90" />
        <rect className="elements-impact-rect order-first" x="45" y="45" rx="2" />
        <rect className="elements-impact-rect order-second" x="77" y="45" rx="2" />
        <rect className="elements-impact-rect order-third" x="109" y="45" rx="2" />
        <path className="elements-impact-arrow" fill-rule="evenodd" clip-rule="evenodd" d="M14.8931 32.025L30.887 
        25.4001C32.9285 24.5545 33.8976 22.2136 33.0512 20.1724L26.4204 4.18235C25.5672 2.12479 22.6521 2.12619 
        21.8009 4.18456L19.1002 10.7148C18.9521 11.073 18.5415 11.2432 18.1834 11.0949L10.3241 7.83945C7.50483 
        6.67168 4.27271 8.01047 3.10493 10.8297C1.93716 13.649 3.27595 16.8811 6.0952 18.0489L14.111 21.3691C14.3828 
        21.4817 14.5118 21.7932 14.3993 22.065L11.6267 28.7586C10.7743 30.8163 12.8353 32.8774 14.8931 32.025Z" />
      </svg>
    </div>
  )
}

// Page
//------------------------------------------------------------------------------------------------------------------------

const Novuum = () => (
  <>
    <NavBar />
    <ScrollTop />
    <div>
      <section className="project-hero">
        <div className="hero-image project-hero-image fadeInUp" />
      </section>
      <div id="project-container" className="project-container">
        <section className="project-summary">
          <div className="project-intro">
            <div className="project-summary">
              <h1 className="project-label">Novuum</h1>
              <p className="project-specializations s1">
                UI/UX Design <span className="dot-colored">•</span> User Research
              </p>
              <p className="project-description">
                Creating a charity can be cumbersome but knowing how to start the
                process is an even bigger challenge.
                <br />
                <br />
                Novuum was an exploration of{' '}
                <span className="text-highlight">
                  how charities are registered within Canada
                </span>{' '}
                to uncover and address systemic inefficiencies. The goal was to
                critically assess the current experience and conceptualize a more
                efficient service.
              </p>
            </div>
            <div className="project-overview">
              <div id="project-role" className="project-overview-item">
                <p className="project-overview-item-label s1">Role</p>
                <p className="project-overview-item-title">
                  UX Researcher/Product Designer
                </p>
              </div>
              <div id="project-timeline" className="project-overview-item">
                <p className="project-overview-item-label s1">Timeline</p>
                <p className="project-overview-item-title">
                  Oct 2020 - Feb 2021 (5 months)
                </p>
              </div>
              <div id="project-members" className="project-overview-item">
                <p className="project-overview-item-label s1">Team</p>
                <p className="project-overview-item-title">
                  Solo Researcher/Designer
                </p>
              </div>
              <div id="project-links" className="project-overview-item">
                <p className="project-overview-item-label s1">Links</p>
                <a className="link-standalone">
                  <p className="link-standalone-text">View in ...</p>
                  <img
                    className="link-standalone-arrow"
                    src={ArrowRight}
                    alt="right arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="divider-horizontal-lg" />
        <section className="project-content">
          <div className="project-section-details">
            <p className="project-section-label s1">The context</p>
            <h3 className="project-section-title">Old Conclusions</h3>
          </div>
          <div className="project-section-text">
            <p className="project-section-text-body">
              The inspiration for Novuum started a few years ago during my tenure
              at a university grant committee that distributed funding to
              student-run nonprofits on campus.
              <br />
              <br />A common question tended to pop up with every application. It
              was one that the entire committee, along with most of the applicants
              themselves, struggled to answer.
              <blockquote className="project-section-text-blockquote">
                "Is the nonprofit a registered charity and if not, how can it
                register for charitable status?"
              </blockquote>
              Since then, numerous conversations with nonprofit founders uncovered
              that not only was the registration process extremely laborious, but
              that it was frustrating and difficult to find all the relevant
              information to even get started.
            </p>
          </div>
        </section>
        <img className="project-image-lg" src={Novuum1} />
        <section className="project-content">
          <div className="project-section-details">
            <p className="project-section-label s1">The challenge</p>
            <h3 className="project-section-title">Defining constraints</h3>
          </div>
          <div className="project-section-text">
            <p className="project-section-text-body">
              Revamping the entire registration process for charities would have
              been an impossible endeavor. As with most projects, the problem
              scope had to be small enough to investigate with minimal effort yet
              provide maximal impact when addressed.
              <br />
              <br />
              I had to prioritize my time, the business impact of the hypothetical
              changes, and the practicality of deploying them. They became the
              environmental constraints that I would use to guide my process.
              <br />
              <br />
              Regardless of how much the data might point toward a particular
              problem in the system, I had to assess its approachability and move
              onto the next issue if it was too large to tackle.
            </p>
          </div>
        </section>
        <div className="elements-container">
          <ElementsImpact />
        </div>
        <section className="project-content">
          <div className="project-section-details">
            <p className="project-section-label s1">Research Framework</p>
            <h3 className="project-section-title">Identifying assumptions</h3>
          </div>
          <div className="project-section-text mgb-80">
            <p className="project-section-text-body">
              Since I didn't have the benefit of having a specific problem scoped
              out for me beforehand, I had to carry out an initial wave of
              exploratory research. My goal was to understand all the different
              inefficiencies in the registration system and quickly isolate the
              subset that would give me "the best bang for my buck" when it was 
              addressed.
              <br />
              <br />
              Using a&nbsp;
              <InlineLink
                link="https://en.wikipedia.org/wiki/First_principle"
                link_text="First Principles"
                destination="wikipedia.org"
              />
              &nbsp;approach, I first created a null hypothesis to capture the
              ideal state for the registration process.
              <blockquote className="project-section-text-blockquote">
                “Prospective founders need to register their charities to conduct
                critical operations in Canada and can do so without facing any
                challenges in the entire registration process from start to
                finish.”
              </blockquote>
              The core statement was then further split into its root assumptions:
              <ul>
                <li>
                  People can successfully create a registered charity with minimal
                  effort.
                </li>
                <li>
                  They understand the requirements for registering a charity.
                </li>
                <li>
                  They want to register a charity to receive benefits and
                  distribute tax receipts.
                </li>
                <li>
                  They know the difference between nonprofits and registered
                  charities in Canada.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <img className="project-image-lg" src={Novuum1} />
        <section className="project-content">
          <div className="project-section-text mgb-80">
            <h6 className="project-section-text-subheading">
              Is that a priori or a posteriori in the sky?
            </h6>
            <p className="project-section-text-body">
              By dissecting the hypothesis into its "first principles", I suddenly
              had clarity over the assumptions I was dealing with. Isolating them
              even further provided me with a safety net. It enabled me to test
              each assumption individually and contain any crossover bias.
              <br />
              <br />
              Creating a null-hypothesis would help me control bias and force me
              to stress-test my initial problem scope that I then used to derive
              the actual issue to tackle.
            </p>
            <h6 className="project-section-text-subheading">
              How do I know if the problem is universal?
            </h6>
            <p className="project-section-text-body">
              No good study is complete without an old-fashioned control group.
              Building a null-hypothesis would have been moot had I not equally
              valued vetting research participants.
              <br />
              <br />
              To ensure that I had statistical confidence in my tests, minimized
              any&nbsp;
              <InlineLink
                link="https://dictionary.apa.org/carryover-effects"
                link_text="carryover effects"
                destination="dictionary.apa.org"
              />
              &nbsp;and could replicate my assumptions, I split my research group
              into two sets:
              <ul>
                <li>Primary - Charity founders who had lived experience.</li>
                <li>
                  Control - Individuals who knew nothing about charities and how
                  to register them.
                </li>
              </ul>
              <br />
              Further segmenting the groups to study personal factors, such as age
              or gender, wasn't necessary since a hypothetical solution should
              cover most ensuing accessibility and usability concerns. More
              stringent experimental design would have compromised recruitment and
              would have been overkill given the time constraints.
            </p>
          </div>
        </section>
        <img className="project-image-lg" src={Novuum1} />
        <section className="project-content">
          <div className="project-section-details">
            <p className="project-section-label s1">Kicking off</p>
            <h3 className="project-section-title">New Beginnings</h3>
          </div>
          <div className="project-section-text mgb-80">
            <p className="project-section-text-body">
              Since I didn't have the benefit of having a specific problem scoped
              out for me beforehand, I had to carry out an initial wave of
              exploratory research. My goal was to understand all the different
              inefficiencies in the registration system and quickly isolate the
              subset that would give me "the best bang for my buck".
              <br />
              <br />
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  </>
)

export default Novuum
