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
                    <h1 className="about_hero_title h1">Hey there, I'm Fardeen <span role="img" aria-label="waving hand">👋</span></h1>
                    <div id="about" className="hero_image" />
                    <div className="about_bio">
                        <h4 className="about_bio_title">Learn more about me</h4>
                        <p className="about_bio_content">Ever since I was a child, I had an insatiable hunger for knowledge. I wanted to learn everything
                        about everything and nothing could stop me on my quest. I can vividly remember the many nights I was under the blankets, 
                        perched over an encyclopedia with a flashlight in my hand.</p>
                        <p className="about_bio_content">The quest for knowledge is one that I still pursue. Whether I’m watching a movie and trying 
                        to understand why a scene was crafted a certain way or wondering how users will respond to a feature, I’m always on the hunt 
                        for information that I can combine in unique ways.</p>
                        <p className="about_bio_content">The endless curiosity eventually led me to the <a href="https://uwaterloo.ca/">University of Waterloo</a>, 
                        where I graduated from with a degree in Biology and specializations in Bioinformatics, Psychology and Entrepreneurship. Everything I learned 
                        amounts to one line - "the mitochondrion is the powerhouse of the cell".</p>
                        <p className="about_bio_content">Jokes aside, studying science taught me a lot about being data-driven in my process. While I didn’t realize 
                        it immediately, learning biology opened my eyes to the world of design. Countless hours of memorizing different features of various
                        organisms and <a href="https://www.cracked.com/article_20368_the-6-coolest-survival-traits-designed-by-evolution.html">how they're optimized for 
                        maximum survival</a> turned the frustration of studying into fascination.</p>
                        <p className="about_bio_content">As a product designer, I enjoy working at the intersection of ideation, design and engineering. I believe
                        that designing for systems holistically, rather than individual services, leads to great outcomes. Developing good product sense as a principle 
                        designer in both <a href="https://prospr.cc/">my own startup</a> and my recent work stint at <a href="https://vendorpm.com/">VendorPM</a> has 
                        taught me how to properly balance business objectives and engineering constraints as I relentlessly champion the user.</p>
                        <p className="about_bio_content">My eagerness for novelty also extends to my hobbies. In my free time, I like to read a lot of non-fiction, 
                        especially on history and anthropology. The past fascinates me, with books allowing me to explore the experiences of others throughout time. 
                        Growing up, family time was often centered around movies. Habit eventually evolved to passion, and watching films quickly became my second love.
                         I also enjoy playing squash with friends, at least whenever I could get a free court.</p>
                    </div>
                </div>
            </div>
        </body>
    </html>
)

export default About
