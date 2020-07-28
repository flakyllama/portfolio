import React from 'react'
import '../styles/theme.scss'

const Header = () => (
  <header>
    <div className="container">
      <div className="logo">
        <link to='/'>Fardeen</link>
      </div>
      <div className="navigation">
        <nav>
          <link to="/about">01. About</link>
          <link to="/experience">02. Experience</link>
          <link to="/showcase">03. Showcase</link>
          <link to="/other">04. Other</link>
        </nav>
      </div>
    </div>
  </header>
)

export default Header