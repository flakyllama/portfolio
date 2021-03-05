import React from 'react'
import '../styles/global.scss'
import '../styles/about.scss'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import InlineLink from '../components/inlinelink.js'

const About = () => (
    <html>
        <head>
        <meta charset="UTF-8" />
        </head>
        <body>
            <NavBar />
            <div className="about-container">
                <section className="about-hero">
                    <div className="hero-image about-hero-image fadeInUp" />
                </section>
                <section className="about-bio-container fadeInUp-delay">
                        <div className="about-bio-content">
                            <h4 className="about-bio-title">Hey there <span role="img" aria-label="waving hand">👋</span> I'm Fardeen, a product designer from 
                                Toronto<span className="dot-colored">.</span></h4>
                            <div className="about-bio-body">
                                <p>Ever since I was a child, I had an insatiable hunger for knowledge. I wanted to learn everything about everything and nothing could 
                                    stop me. I can still recall the nights I was under the blankets, perched over encyclopedias with a flashlight in my hand.</p>
                                <p>The quest for knowledge is one that I still pursue. Whether I’m watching a movie and trying to understand why a scene was crafted 
                                    a certain way or wondering how users will use a feature, I’m always seeking information that I can combine in unique ways.</p>
                                <p>The endless curiosity eventually led me to the&nbsp;
                                    <InlineLink link="https://uwaterloo.ca/" link_text="University of Waterloo" destination="uwaterloo.ca" /> 
                                    , where I graduated from with a degree in Biology, along with specializations in Bioinformatics, Psychology and Entrepreneurship.</p>
                                <p>Studying science taught me to be analytical and purposeful with my process and while it wasn't clear immediately, it also 
                                    introduced me to the world of design. Hours of learning about biological principles, such as&nbsp;
                                    <InlineLink link="https://www.cracked.com/article_20368_the-6-coolest-survival-traits-designed-by-evolution.html" 
                                    link_text="evolution guiding complexity" destination="cracked.com" />, led to an appreciation for design in its most natural form.</p>
                                <p>As a product designer, I enjoy working at the intersection of ideation, design and engineering. The drive to explore new frontiers and 
                                    design for systems holistically, especially for social good, manifests as a common thread in my work. Developing good product sense as a 
                                    principle designer at both&nbsp;<InlineLink link="https://prospr.cc/" link_text="my startup" destination="prospr.cc" /> and my most 
                                    recent stint at&nbsp;<InlineLink link="https://vendorpm.com/" link_text="VendorPM" destination="vendorpm.com" /> taught me how to do so 
                                    while also balancing business objectives and engineering constraints as I relentlessly champion the user.</p>
                                <p>My eagerness for novelty also extends to my hobbies. In my free time, I like to read non-fiction, especially on history and 
                                    anthropology. The past fascinates me, with books sharing the experiences of others throughout time. Watching films is my second 
                                    love; I'd never pass on the opportunity to pick up popcorn and binge through a couple of movies. I also enjoy playing squash 
                                    with friends and figuring out how my camera works.</p>
                            </div>
                        </div>
                    </section>
            </div>
            <Footer />
        </body>
    </html>
)

export default About

