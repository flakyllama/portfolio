import React from 'react'
import '../styles/global.scss'

// Consider adding progress bar for reading

const Footer = () => {
    return(
        <footer className="footer">
            <p className="footer-credits">Designed and built by Fardeen Chowdhury.
                <br />
                <span role="img" aria-label="tea">🍵</span> 200 cups of tea were sacrificed in the making of this site.
            </p>
        </footer>
    )
}

export default Footer