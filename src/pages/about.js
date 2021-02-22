import React from 'react'
import '../styles/global.scss'
import '../styles/about.scss'
import '../components/header.js'
import Test from '../images/test.jpg'

const About = () => (
    <html>
        <head>
        </head>
        <body>
            <div className="about_container">
                <div className="about_hero">
                    <div id="about" className="hero_image" />
                    <div className="about_bio">
                        <h4 className="about_bio_title">Hey there <span role="img" aria-label="waving hand">👋</span> I'm Fardeen, a product designer
                        from Toronto.</h4>
                        <p className="about_bio_content">Ever since I was a child, I had an insatiable hunger for knowledge. I wanted to learn everything
                        about everything and nothing could stop me. I can vividly recall the many nights I was under the blankets, perched 
                        over encyclopedias with a flashlight in my hand.</p>
                        <p className="about_bio_content">The quest for knowledge is one that I still pursue. Whether I’m watching a movie and trying 
                        to understand why a scene was crafted a certain way or wondering how users will respond to a feature, I’m always hunting 
                        for information that I can fuse together in unique ways.</p>
                        <p className="about_bio_content">The endless curiosity eventually led me to the <a href="https://uwaterloo.ca/">University of 
                        Waterloo</a>, where I graduated from with a degree in Biology, along with specializations in Bioinformatics, Psychology and
                         Entrepreneurship.</p>
                        <p className="about_bio_content">Studying science taught me a lot about being data-driven in my process. While I 
                        didn’t realize it immediately, it had also introduced me to the world of design. Countless hours of trying to understand <a 
                        href="https://www.cracked.com/article_20368_the-6-coolest-survival-traits-designed-by-evolution.html">how organisms are designed 
                        for maximum survival</a> turned the frustration of studying into fascination.</p>
                        <p className="about_bio_content">As a product designer, I enjoy working at the intersection of ideation, design and engineering.
                         I believe that designing for systems holistically, instead of individual tasks, leads to great outcomes. Developing good product
                          sense as a principle designer at both <a href="https://prospr.cc/">my startup</a> and my recent stint at <a href="https://vendorpm.com/">
                              VendorPM</a> has taught me how to properly balance business objectives and engineering constraints as I relentlessly champion 
                              the user.</p>
                        <p className="about_bio_content">My eagerness for novelty also extends to my hobbies. In my free time, I like to read non-fiction,
                         especially on history and anthropology. The past fascinates me, with books allowing me to explore the experiences of others throughout 
                         time. Growing up, family time was often centered around movies. Habit evolved into passion, and watching films quickly became 
                         my second love. I also enjoy playing squash with friends, at least whenever I can get a free court.</p>
                    </div>
                </div>
            </div>
        </body>
    </html>
)

export default About
