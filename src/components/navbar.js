import React from 'react'
import '../styles/global.scss'

// Consider adding progress bar for reading

const NavBar = () => {
    return(
        <header className="nav">
            <div className="nav-inner">
                <a className="logo" href="/">Fardeen Chowdhury<span className="dot-colored">.</span>
                    {/* <img src={logo} alt="caos creations logo" /> */}
                </a>
                <div className="nav-links">
                    <a href="/" target="_top">Home</a>
                    <a href="about" target="_top">About</a>
                    <a href="/" target="_top">Experiments</a>
                    <a href="mailto:fardeen.h.chowdhury@gmail.com">Contact</a>
                </div>
            </div>
      </header>
    )
}

export default NavBar