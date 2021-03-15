import React, { useEffect, useState } from 'react'
import '../styles/global.scss'
import ArrowUp from '../images/icons/arrow-up.svg'

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    // bodyRef.current = document.querySelector('body')
    const listener = e => {
      console.log(e)
      setIsVisible(window.scrollY >= 400)
    }
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [])
  return (
    <a
      id="btn-top"
      className={`btn-misc-top ${isVisible ? 'visible' : ''}`}
      href="#"
    >
      <img className="btn-misc-top-arrow" src={ArrowUp} alt="Go to top" />
    </a>
  )
}

export default ScrollTop
