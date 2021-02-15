import React from 'react'
import '../styles/index.scss'
import '../styles/about.scss'
import '../components/header.js'

const About = () => (
    <html>
        <head>

        </head>
        <body>
            <div className="about_container">
                <div className="about_hero">
                    <h1 className="about_hero_title h1">Learn more about me</h1>
                    <img className="about_hero_image" src="../images/tests.jpg" loading="lazy" alt="test"/>
                </div>
            </div>
        </body>
    </html>
)


export default About
