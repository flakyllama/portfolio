import React from 'react'
import '../styles/global.scss'
import '../styles/about.scss'
import NavBar from '../components/navbar.js'
import ScrollTop from '../components/btntop.js'
import Footer from '../components/footer.js'
import InlineLink from '../components/inlinelink.js'

const About = () => (
 <>
  <NavBar />
  <ScrollTop />
  <div className="about-container">
    <section className="about-hero">
      <div className="hero-image about-hero-image fadeInUp" />
    </section>
    <section className="about-bio-container fadeInUp-delay">
      <div className="about-bio-content">
        <h3 className="about-bio-title">
          Hey there{' '}
          <span role="img" aria-label="waving hand">
            👋
          </span>{' '}
          I'm Fardeen
          <span className="dot-colored">.</span>
        </h3>
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
            watching a movie and trying to understand more about the cinematography
            or wondering how users will use a feature, I’m always seeking 
            information that I can combine in unique ways.
          </p>
          <p>
            The endless curiosity eventually led me to the&nbsp;
            <InlineLink
              link="https://uwaterloo.ca/"
              link_text="University of Waterloo"
              destination="uwaterloo.ca"
            />
            , where I studied Biology, and specialized in Bioinformatics, Psychology
            and Entrepreneurship.
          </p>
          <p>
            Studying science taught me to be analytical. It wasn't clear immediately 
            but it also introduced me to design as a process. Learning about 
            biological concepts, such as&nbsp;
            <InlineLink
              link="https://www.cracked.com/article_20368_the-6-coolest-survival-traits-designed-by-evolution.html"
              link_text="evolution guiding complexity"
              destination="cracked.com"
            />
            , made me appreciate design in its most natural form.
          </p>
          <p>
            As a designer, I aim to explore new technological frontiers and practice 
            holistic design, especially to create social impact. Developing good 
            product sense as a product designer in all my design involvements taught 
            me how to do so.
          </p>
          <p>
            My eagerness for novelty also extends to my hobbies. In my free time, I 
            like to read and watch films. I'd never pass on the opportunity to binge 
            through a couple of books and movies. You can also find me at the gym,&nbsp;
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
