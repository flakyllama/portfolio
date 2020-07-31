import React from 'react'
import '../styles/theme.scss'
import '../styles/header.scss'

const Header = () => (
  <header className="container">
    <div className="nav-bar">
      <div className="logo">
        <a href='/'>Logo</a>
      </div>
      <div className="nav-links">
        <ol className="list">
          <li className="list-item">
            <a className="nav-bar-link" href="/about" style={{transitionDelay: 0}}>About</a>
          </li>
          <li className="list-item">
            <a className="nav-bar-link" href="/experience" style={{transitionDelay: 100}}>Experience</a>
          </li>
          <li className="list-item">
          <a className="nav-bar-link" href="/work" style={{transitionDelay: 200}}>Work</a>
          </li>
          <li className="list-item">
          <a className="nav-bar-link" href="/other" style={{transitionDelay: 300}}>Other</a>
          </li>
        </ol>
      </div>
    </div>
  </header>
)

function hideNav (props) {
  if (props.scrollDirection !== "none") {
    document.getElementById("container").style.height = "80px";
    document.getElementById("container").style.boxShadow = "0 10px 30px -10px rgba(12,12,13,0.12)";
    
    // Hide on scroll down, overshoot to accomodate for shadow
    if (props.scrollDirection === "down") document.getElementById("container").style.transform = "translateY(-90px)";
  }
} 

export default Header