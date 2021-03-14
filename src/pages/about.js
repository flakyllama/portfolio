import React from 'react'
import '../styles/global.scss'
import '../styles/about.scss'
import NavBar from '../components/navbar.js'
import ScrollTop from '../components/btntop.js'
import Footer from '../components/footer.js'
import InlineLink from '../components/inlinelink.js'

const About = () => (
 <>
  <ScrollTop />
  <NavBar />
  <div className="about-container">
    <section className="about-hero">
      <div className="hero-image about-hero-image fadeInUp" />
    </section>
    <section className="about-bio-container fadeInUp-delay">
      <div className="about-bio-content">
        <h4 className="about-bio-title">
          Hey there{' '}
          <span role="img" aria-label="waving hand">
            👋
          </span>{' '}
          I'm Fardeen, a product designer from Toronto
          <span className="dot-colored">.</span>
        </h4>
        <div className="about-bio-body">
          <p>
            Ever since I was a child, I had an insatiable hunger for
            knowledge. I wanted to learn everything about everything and
            nothing could stop me. I can still recall the nights I was under
            the blankets, perched over encyclopedias with a flashlight in my
            hand.
          </p>
          <p>
            The quest for knowledge is one that I still pursue. Whether I’m
            watching a movie and trying to understand why a scene was
            crafted a certain way or wondering how users will use a feature,
            I’m always seeking information that I can combine in unique
            ways.
          </p>
          <p>
            The endless curiosity eventually led me to the&nbsp;
            <InlineLink
              link="https://uwaterloo.ca/"
              link_text="University of Waterloo"
              destination="uwaterloo.ca"
            />
            , where I graduated from with a degree in Biology, along with
            specializations in Bioinformatics, Psychology and
            Entrepreneurship.
          </p>
          <p>
            Studying science taught me to be analytical and purposeful with
            my process and while it wasn't clear immediately, it also
            introduced me to the world of design. Hours of learning about
            biological principles, such as&nbsp;
            <InlineLink
              link="https://www.cracked.com/article_20368_the-6-coolest-survival-traits-designed-by-evolution.html"
              link_text="evolution guiding complexity"
              destination="cracked.com"
            />
            , led to an appreciation for design in its most natural form.
          </p>
          <p>
            As a product designer, I aim to explore new technological
            frontiers and design for systems holistically, especially to
            create meaningful social impact. Developing good product sense
            as a principle designer at both&nbsp;
            <InlineLink
              link="https://prospr.cc/"
              link_text="my startup"
              destination="prospr.cc"
            />
            &nbsp;and my most recent work stint at&nbsp;
            <InlineLink
              link="https://vendorpm.com/"
              link_text="VendorPM"
              destination="vendorpm.com"
            />
            &nbsp;taught me how to do so.
          </p>
          <p>
            My eagerness for novelty also extends to my hobbies. In my free
            time, I like to read non-fiction, especially on history and
            anthropology. Watching films is my second love; I'd never pass
            on the opportunity to binge through a couple of movies. You can
            also find me playing squash with friends,&nbsp;
            <InlineLink
              link="https://open.spotify.com/playlist/4Z7U56v1FHKHI5SdrNt3ji?si=tpr7ayTDTKC_w0Y1mtjHKg"
              link_text="jamming to synthwave"
              destination="spotify.com"
            />
            , and trying to figure out how my camera works.
          </p>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</>
)

export default About
